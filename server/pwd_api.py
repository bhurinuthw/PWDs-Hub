from flask import Flask, request, abort, jsonify
from firebase import firebase
import datetime
import requests

app = Flask(__name__)

#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

#get all user
@app.route("/pwd", methods = ['GET'])
def get():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        response = jsonify(data)
        response.status_code = 200
        return response

#get user by id (json body)
@app.route("/pwd/id", methods = ['GET'])
def getById():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        #extract body request to get user_id
        user_id = request.form.to_dict()['user_id']
        res = data[str(user_id)]
        response = jsonify(res)
        return response

#get user by filter (json body)
@app.route("/pwd/filter", methods = ['GET'])
def getByFilter():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        #extract body request to get user_id
        user_id = request.form.to_dict()['user_id']
        res = data[str(user_id)]
        response = jsonify(res)
        return response    


#update user profile (json body)
@app.route("/pwd/edit", methods = ['PUT'])
def update():
    if(request.method == 'PUT'):
        pass


if __name__ == "__main__":
    app.run()
