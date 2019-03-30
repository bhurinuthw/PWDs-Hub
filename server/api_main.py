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
def get_activity():
    if(request.method == 'GET'):
        pass

@app.route("/activities/update", methods = ['PUT'])
def update_activity():
    if(request.method == 'PUT'):
        pass

####Company####
#get company by id
@app.route("/company/id", methods = ['GET'])
def getById_company():
    if(request.method == 'GET'):
        data = messager.get("Company_users",None)
        #extract body request to get user_id
        company_id = request.form.to_dict()['company_id']
        res = data[str(company_id)]
        #pack to JSON response
        response = jsonify(res)
        response.status_code = 200
        return response

####Department####
#get department by department_id
@app.route("/department/id", methods = ['GET'])
def update_department():
    if(request.method == 'GET'):
        data = messager.get("Department_users",None)
        #extract body request to get user_id
        department_id = request.form.to_dict()['department_id']
        res = data[str(department_id)]
        #pack to JSON response
        response = jsonify(res)
        response.status_code = 200
        return response

####PWD####
    #get all user
@app.route("/pwd", methods = ['GET'])
def get_pwd():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        #pack to JSON response
        lt = []
        for element in data:
            lt.append(data[element])
        response = jsonify(lt)
        response.status_code = 200
        return response

#get user by id (json body)
@app.route("/pwd/id", methods = ['GET'])
def getById_pwd():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        #extract body request to get user_id
        user_id = request.form.to_dict()['user_id']
        res = data[str(user_id)]
        #pack to JSON response
        response = jsonify(res)
        response.status_code = 200
        return response

#get user by filter (json body)
@app.route("/pwd/filter", methods = ['GET'])
def getByFilter():
    if(request.method == 'GET'):
        data = messager.get("PWD_users",None)
        #extract body request to get user_id
        company = request.form.to_dict()['company']
        department = request.form.to_dict()['department']
        province = request.form.to_dict()['province']
        lt = []
        for user in data:
            if(data[user]['company'] == company or data[user]['department'] == department or data[user]['province'] == province):
                lt.append(data[user])
        #pack to JSON response
        response = jsonify(lt)
        response.status_code = 200
        return response    

#update user profile (json body)
@app.route("/pwd/edit", methods = ['PUT'])
def update_user():
    if(request.method == 'PUT'):
        pass

if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 80)

