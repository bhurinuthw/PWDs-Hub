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

    def register(self, email, password, data):
        auth = self.firebase.auth()
        try:
            auth.create_user_with_email_and_password(email, password)
            self.createNewUser(email, password, data)
        except requests.exceptions.HTTPError as err:
            error_json = err.args[1]
            error = json.loads(error_json)['error']
            print(error['message'])

    def createNewUser(self, email, password, data):
        auth = self.firebase.auth()
        db = self.firebase.database()
        user = auth.sign_in_with_email_and_password(email, password)
        uid = auth.get_account_info(user['idToken'])['users'][0]['localId']
        results = db.child("PWD_users").push(data, user['idToken'])


# if __name__ == "__main__":
#     a = Authentication()

#     data = {
#         "n_id": "12345678",
#         "prefix": "Mr",
#         "name": "TestJa",
#         "surname": "Accenturer",
#         "phone": "0811111111",
#         "email": "testja@gmail.com",
#         "description": "",
#         "category": ["ตาบอด", "หูหนวก"],
#         "verified_permanent": "False",
#         "verified_field": "False",
#         "verified_free": "False",
#         "verified_by_network": ["PKs' network", "Parin's Charity"]
#     }

#     a.register('testja@gmail.com', 'password1', data)
