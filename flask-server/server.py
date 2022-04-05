from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
from sklearn import tree
from matplotlib import pyplot as plt
from model_script import run_script_study_work, run_script_entertainment
import sqlite3
import os
from flask_cors import CORS

current_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_url_path='/static')
CORS(app)

run_script_study_work()
run_script_entertainment()

model_sw = pickle.load(open("./model_study_work.pkl", "rb"))
model_e = pickle.load(open("./model_entertainment.pkl", "rb"))


@app.route("/")
def index():
  return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
  float_features = [float(x) for x in request.form.values()]
  features = [np.array(float_features)]
  prediction_sw = model_sw.predict(features)
  prediction_e = model_e.predict(features)
  if 1 in prediction_sw:
    result_sw = "Phù hợp cho nhu cầu học tập và làm việc"
  else: result_sw = "Không phù hợp cho nhu cầu học tập và làm việc"

  if 1 in prediction_e:
    result_e = "Phù hợp cho nhu cầu giải trí"
  else: result_e = "Không phù hợp cho nhu cầu giải trí"

  result = [result_sw, result_e]

  return render_template("index.html", prediction = result)

@app.route("/create_model", methods=["POST"])
def create_model():
  run_script_study_work()
  run_script_entertainment()
  return render_template("index.html")

@app.route("/visualize", methods=["POST"])
def visualize():
  feature_cols = ["CPU cores", "CPU freq", "Display height", "Display screen", "Display witdh", "Memory RAM", "Memory ROM"]
  model_sw = pickle.load(open("./model_study_work.pkl", "rb"))
  fig = plt.figure(figsize=(25, 20))
  _ = tree.plot_tree(model_sw,
                    feature_names=feature_cols,
                    class_names=["0", "1"],
                    filled=True)
  fig.savefig("./static/images/decision_tree_study_work.png", bbox_inches='tight')

  model_e = pickle.load(open("./model_entertainment.pkl", "rb"))
  fig = plt.figure(figsize=(25, 20))
  _ = tree.plot_tree(model_e,
                    feature_names=feature_cols,
                    class_names=["0", "1"],
                    filled=True)
  fig.savefig("./static/images/decision_tree_entertainment.png", bbox_inches='tight')

  image_sw_url = "images/decision_tree_study_work.png"
  image_e_url = "images/decision_tree_study_work.png"

  sw_data = {"title": "Học tập và làm việc", "path": image_sw_url}
  e_data = {"title": "Giải trí", "path": image_e_url}

  result = [sw_data, e_data]
  return render_template("index.html", image_url = result)

@app.route("/database")
def database():
  connection = sqlite3.connect(current_dir + "/smartphone.db")
  cursor = connection.cursor()
  query = "SELECT * FROM smartphones"
  rows = cursor.execute(query).fetchall()
  columns = [desc[0] for desc in cursor.description]
  result = []
  for row in rows:
    row = dict(zip(columns, row))
    result.append(row)
  return jsonify(result)

@app.route("/database/brands")
def database_brands():
  connection = sqlite3.connect(current_dir + "/smartphone.db")
  cursor = connection.cursor()
  query = "SELECT DISTINCT maker_name FROM smartphones"
  rows = cursor.execute(query).fetchall()
  result = {"maker_name": rows}
  return jsonify(result)

@app.route("/database/<maker_name>")
def database_query_by_brand(maker_name):
  connection = sqlite3.connect(current_dir + "/smartphone.db")
  cursor = connection.cursor()
  query = "SELECT * FROM smartphones WHERE maker_name=\"{}\"".format(maker_name)
  rows = cursor.execute(query).fetchall()
  columns = [desc[0] for desc in cursor.description]
  result = []
  for row in rows:
    row = dict(zip(columns, row))
    result.append(row)
  return jsonify(result)

@app.route("/filter", methods=["POST"])
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

  if (query_data["study_work"]):
    if len(query_data["study_work"]) == 1:
      study_work="({})".format(query_data["study_work"][0])
    else:
      study_work = tuple(query_data["study_work"])
    query += " AND study_work in {}".format(study_work)

  if (query_data["entertainment"]):
    if len(query_data["entertainment"]) == 1:
      entertainment="({})".format(query_data["entertainment"][0])
    else:
      entertainment = tuple(query_data["entertainment"])
    query += " AND entertainment in {}".format(entertainment)

  connection = sqlite3.connect(current_dir + "\smartphone.db")
  cursor = connection.cursor()
  rows = cursor.execute(query).fetchall()
  columns = [desc[0] for desc in cursor.description]
  result = []
  for row in rows:
    row = dict(zip(columns, row))
    result.append(row)
  result = jsonify(result)
  return result

@app.route("/predict_client", methods=["POST"])
def post_predict_client():
  request_client = request.get_json()
  float_features = [float(x) for x in request_client["data"]]
  features = [np.array(float_features)]
  prediction_sw = model_sw.predict(features)
  prediction_e = model_e.predict(features)
  if 1 in prediction_sw:
    result_sw = "Suitable"
  else: result_sw = "Not suitable"

  if 1 in prediction_e:
    result_e = "Suitable"
  else: result_e = "Not suitable"

  response_sw = {"study_work":result_sw}
  response_e = {"entertainment": result_e}

  response = [response_sw, response_e]

  return jsonify(response)

if __name__ == "__main__":
  app.run(debug=True) 