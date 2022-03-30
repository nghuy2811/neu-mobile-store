from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
from sklearn import tree
from matplotlib import pyplot as plt
from model_script import run_script
import sqlite3
import os
from flask_cors import CORS, cross_origin

current_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_url_path='/static')
CORS(app, resources={r"/api/*": {"origins": "*"}})

model = pickle.load(open("./model.pkl", "rb"))

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
  float_features = [float(x) for x in request.form.values()]
  features = [np.array(float_features)]
  prediction = model.predict(features)

  return render_template("index.html", prediction_type = prediction)

@app.route("/create_model", methods=["POST"])
def create_model():
  run_script()
  return render_template("index.html")

@app.route("/visualize", methods=["POST"])
def visualize():
  feature_cols = ["CPU cores", "CPU freq", "Display height", "Display screen", "Display witdh", "Memory RAM", "Memory ROM"]
  model = pickle.load(open("./model.pkl", "rb"))
  fig = plt.figure(figsize=(25, 20))
  _ = tree.plot_tree(model,
                    feature_names=feature_cols,
                    class_names=["0", "1"],
                    filled=True)
  fig.savefig("./static/images/decision_tree.png", bbox_inches='tight')
  image_url = "./static/images/decision_tree.png"
  return render_template("index.html", image_url = image_url)

@app.route("/database")
def database():
  connection = sqlite3.connect(current_dir + "\smartphone.db")
  cursor = connection.cursor()
  query = "SELECT * FROM smartphones"
  rows = cursor.execute(query).fetchall()
  columns = [desc[0] for desc in cursor.description]
  result = []
  for row in rows:
    row = dict(zip(columns, row))
    result.append(row)
  return jsonify(result)

# @app.route("/filter", methods=["GET"])
# def get_filter():
#   query_data = request.get_json()
#   connection = sqlite3.connect(current_dir + "\smartphone.db")
#   cursor = connection.cursor()
#   query = "SELECT * FROM smartphones"
#   rows = cursor.execute(query).fetchall()
#   columns = [desc[0] for desc in cursor.description]
#   result = []
#   for row in rows:
#     row = dict(zip(columns, row))
#     result.append(row)
#   return jsonify(result)

@app.route("/filter", methods=["POST"])
@cross_origin()
def post_filter():
  query_data = request.get_json()
  query = "SELECT * FROM smartphones WHERE 1=1"
  if (query_data["cpu_cores"]):
    if len(query_data["cpu_cores"]) == 1:
      query_cpu_cores="({})".format(query_data["cpu_cores"][0])
    else:
      query_cpu_cores = tuple(query_data["cpu_cores"])
    query += " AND cpu_cores in {}".format(query_cpu_cores)

  if (query_data["cpu_freq"]):
    if len(query_data["cpu_freq"]) == 1:
      cpu_freq="({})".format(query_data["cpu_freq"][0])
    else:
      cpu_freq = tuple(query_data["cpu_freq"])
    query += " AND cpu_freq in {}".format(cpu_freq)

  if (query_data["screen"]):
    if len(query_data["screen"]) == 1:
      screen="({})".format(query_data["screen"][0])
    else:
      screen = tuple(query_data["screen"])
    query += " AND screen in {}".format(screen)

  if (query_data["memory_ram"]):
    if len(query_data["memory_ram"]) == 1:
      memory_ram="({})".format(query_data["memory_ram"][0])
    else:
      memory_ram = tuple(query_data["memory_ram"])
    query += " AND memory_ram in {}".format(memory_ram)

  if (query_data["memory_rom"]):
    if len(query_data["memory_rom"]) == 1:
      memory_rom="({})".format(query_data["memory_rom"][0])
    else:
      memory_rom = tuple(query_data["memory_rom"])
    query += " AND memory_rom in {}".format(memory_rom)

  connection = sqlite3.connect(current_dir + "\smartphone.db")
  cursor = connection.cursor()
  rows = cursor.execute(query).fetchall()
  columns = [desc[0] for desc in cursor.description]
  result = []
  for row in rows:
    row = dict(zip(columns, row))
    result.append(row)
  return jsonify(result)

if __name__ == "__main__":
  app.run(debug=True)