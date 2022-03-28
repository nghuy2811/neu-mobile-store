import pandas as pd
# from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import tree
from matplotlib import pyplot as plt
import pickle

df = pd.read_csv("./data.csv")
df.head()

X = df[["cpu_cores", "cpu_freq", "height", "screen", "width", "memory_ram", "memory_rom"]]
y = df["study_work"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=50)

# sc = StandardScaler()
# X_train = sc.fit_transform(X_train)
# X_test = sc.transform(X_test)

clf = tree.DecisionTreeClassifier()

clf.fit(X_train, y_train)

feature_cols = ["CPU cores", "CPU freq", "Display height", "Display screen", "Display witdh", "Memory RAM", "Memory ROM"]
fig = plt.figure(figsize=(25, 20))
_ = tree.plot_tree(clf,
                  feature_names=feature_cols,
                  class_names=["0", "1"],
                  filled=True)
fig.savefig("./static/images/decision_tree.png", bbox_inches='tight')

pickle.dump(clf, open("model.pkl", "wb"))