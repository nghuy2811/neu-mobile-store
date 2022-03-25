from distutils.log import debug
from flask import Flask

app = Flask(__name__)

@app.route("/home")
def index():
  # return {"ID": [{"Key1": "Value1"}, {"Key2": "Value2"}]}
  return {"Name": "Huy Nguyen"}

if __name__ == "__main__":
  app.run(debug=True)