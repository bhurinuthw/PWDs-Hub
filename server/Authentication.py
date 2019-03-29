import pyrebase
import json
import requests


class Authentication:
    def __init__(self):
        # Initialize config
        self.config = None
        self.get_config()

        self.firebase = pyrebase.initialize_app(self.config)

    def get_config(self):
        with open('config.json') as json_data_file:
            self.config = json.load(json_data_file)['config']

    def register(self, email, password):
        auth = self.firebase.auth()
        try:
            auth.create_user_with_email_and_password(email, password)
            print("Registered successfully")
        except requests.exceptions.HTTPError as err:
            error_json = err.args[1]
            error = json.loads(error_json)['error']
            print(error['message'])

    def signin(self, email, password):
        auth = self.firebase.auth()
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            print("Signed-in successfully")
            return user
        except requests.exceptions.HTTPError as err:
            error_json = err.args[1]
            error = json.loads(error_json)['error']
            print(error['message'])


a = Authentication()
# a.register('test1@gmail.com', 'password1')
a.signin("test@gmail.com", "test1234")
