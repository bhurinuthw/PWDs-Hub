from flask import Flask, request, abort, jsonify
from firebase import firebase
import datetime

app = Flask(__name__)

#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

#register
@app.route("/company", methods = ['GET'])
def get():
    if(request.method == 'GET'):
        pass

@app.route("/company/update", methods = ['PUT'])
def update():
    if(request.method == 'PUT'):
        pass



if __name__ == "__main__":
    app.run()
