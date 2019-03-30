from flask import Flask, request, Response
from Authentication import *


app = Flask(__name__)

auth = Authentication()

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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
