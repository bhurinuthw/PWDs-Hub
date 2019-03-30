from flask import Flask, request, Response, jsonify
from Authentication import *
from Activity import *


app = Flask(__name__)

act = Activity()

@app.route("/activity/create", methods=["POST"])
def create_activity():
    data = request.form.to_dict()
    result = act.create_activity(data)
    resp = Response("Success", status=200, mimetype='application/json')
    return resp

@app.route("/activity/id", methods=["GET"])
def get_activities():
    data = request.form.to_dict()
    result = act.get_activity(data['uid'])
    response = jsonify(result)
    response.status_code = 200
    return response


# @message_api.route('/upload, methods=['POST'])
# def send_individual_picture():
#     picture = request.files['picture']

#     firebase.storage().put(picture)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
