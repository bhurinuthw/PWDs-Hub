from flask import Flask, request, Response, abort, jsonify
from Authentication import *
from firebase import firebase
import datetime

app = Flask(__name__)

auth = Authentication()
#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

####Authentication####
#register
@app.route("/register", methods=["POST"])
def register():
    data = request.form.to_dict()
    result = auth.register(data)
    if result is None:
        resp = Response("Success", status=200, mimetype='application/json')
    else:
        # js = json.dumps(result)
        resp = Response(result, status=404, mimetype='application/json')
    return resp

####Activities####
@app.route("/activities", methods = ['GET'])
def get():
    if(request.method == 'GET'):
        pass

@app.route("/activities/update", methods = ['PUT'])
def update():
    if(request.method == 'PUT'):
        pass

####Company####

if __name__ == "__main__":
    app.run()

