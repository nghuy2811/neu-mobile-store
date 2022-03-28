import pandas as pd
# from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import tree
import pickle

def run_script():
  df = pd.read_csv("./data.csv")
  df.head()

  X = df[["cpu_cores", "cpu_freq", "height", "screen", "width", "memory_ram", "memory_rom"]]
  y = df["study_work"]

  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=50)

  clf = tree.DecisionTreeClassifier()

  clf.fit(X_train, y_train)

  pickle.dump(clf, open("model.pkl", "wb"))

