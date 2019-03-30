from flask import Flask, request, abort, jsonify
from firebase import firebase
import datetime

app = Flask(__name__)

#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

#register
@app.route("/pwd", methods = ['GET'])
def get():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        response = jsonify(data)
        response.status_code = 200
        return response

@app.route("/pwd/update", methods = ['PUT'])
def update():
    if(request.method == 'PUT'):
        pass



if __name__ == "__main__":
    app.run()
