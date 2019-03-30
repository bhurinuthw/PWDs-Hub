import pyrebase
import json
import requests
from firebase import firebase

from flask import request

class Activity:
    def __init__(self):
        # Initialize config
        self.config = None
        self.get_config()

        self.firebase = pyrebase.initialize_app(self.config)
        self.url = 'https://accenture-hackathon-2019-11a52.firebaseio.com/' #firebase db url
        self.messager = firebase.FirebaseApplication(self.url)

    def get_config(self):
        with open('config.json') as json_data_file:
            self.config = json.load(json_data_file)['config']

    def create_activity(self, data):
        data = request.get_json(silent=True)
        db = self.firebase.database()
        key = db.generate_key()
        data['activity_id'] = key
        results = db.child("activities").push(data)

    def get_activity(self, uid):
        data = self.messager.get("activities", None)
        lt = []
        for d in data:
            temp = data[d]
            if temp['isPrivate'] == 'True' and uid in [temp['company_id'], temp['department_id'], temp['pwd_id']]:
                lt.append(temp)
            elif temp['isPrivate'] == 'False':
                lt.append(temp)
        response = json.dumps(lt)
        return response

