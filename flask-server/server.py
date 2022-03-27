from email.policy import default
from flask import Flask, render_template, request, json, Response
import pickle
import numpy as np
from sklearn import tree
from matplotlib import pyplot as plt
from model_script import run_script
from convert import make_json

app = Flask(__name__, static_url_path='/static')

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
  csvFilePath = r'data.csv'
  jsonFilePath = r'./static/data/data.json'
  make_json(csvFilePath, jsonFilePath)
  json_data = open("static/data/data.json")
  data = json.load(json_data)
  return Response(json.dumps(data),  mimetype='application/json')

if __name__ == "__main__":
  app.run(debug=True)