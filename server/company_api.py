from flask import Flask, request, abort, jsonify
from firebase import firebase
import datetime

app = Flask(__name__)

#firebase header
url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
messager = firebase.FirebaseApplication(url)

#get company by id
@app.route("/company/id", methods = ['GET'])
def getById():
    if(request.method == 'GET'):
        data = messager.get("Company_users",None)
        #extract body request to get user_id
        company_id = request.form.to_dict()['company_id']
        res = QueryManager.getById(data,company_id)
        #pack to JSON response
        response = jsonify(res)
        response.status_code = 200
        return response



if __name__ == "__main__":
    app.run()
