from flask import Flask, request, abort, jsonify
from firebase import firebase
import datetime

app = Flask(__name__)

#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

#get department by department_id
@app.route("/department/id", methods = ['GET'])
def getById():
    if(request.method == 'GET'):
        data = messager.get("Department_users",None)
        #extract body request to get user_id
        department_id = request.form.to_dict()['department_id']
        res = QueryManager.getById(data,department_id)
        #pack to JSON response
        response = jsonify(res)
        response.status_code = 200
        return response

if __name__ == "__main__":
    app.run()
