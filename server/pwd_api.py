from flask import Flask, request, abort
from firebase import firebase
import datetime

app = Flask(__name__)

#firebase header
url = '' #firebase db url
messager = firebase.FirebaseApplication(url)

#register
@app.route("/", methods = ['POST'])
def method1():
    return ""

if __name__ == "__main__":
    app.run()
