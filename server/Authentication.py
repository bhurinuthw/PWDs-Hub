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

    def register(self, data):
        auth = self.firebase.auth()
        email = data["email"]
        password = data["password"]
        role = data["role"]
        try:
            auth.create_user_with_email_and_password(email, password)
            if role in ['company', 'department']:
                new_data = self.format_data(data)
                self.createNewUser(email, password, role, new_data)
            else:
                new_data = self.format_pwa_data(data)
                self.createNewPwdUser(email, password, new_data)
        except requests.exceptions.HTTPError as err:
            error_json = err.args[1]
            error = json.loads(error_json)['error']
            return error['message']

    def createNewPwdUser(self, email, password, data):
        auth = self.firebase.auth()
        db = self.firebase.database()
        user = auth.sign_in_with_email_and_password(email, password)
        uid = auth.get_account_info(user['idToken'])['users'][0]['localId']
        results = db.child("PWD_users").push(data, user['idToken'])
        results = db.child("roles").push('pwd', user['idToken'])

    def createNewUser(self, email, password, role, data):
        auth = self.firebase.auth()
        db = self.firebase.database()
        user = auth.sign_in_with_email_and_password(email, password)
        uid = auth.get_account_info(user['idToken'])['users'][0]['localId']
        if role == "company":
            results = db.child("Company_users").push(data, user['idToken'])
            results = db.child("roles").push('company', user['idToken'])
        elif role == "department":
            results = db.child("Department_users").push(data, user['idToken'])
            results = db.child("roles").push('department', user['idToken'])

    def format_pwa_data(self, data):
        data = {
            "email": data["email"],
            "n_id": data["n_id"],
            "prefix": data["prefix"],
            "name": data["name"],
            "surname": data["surname"],
            "phone": data["phone"],
            "description": "",
            "category": data["category"],
            "department": "",
            "company": "",
        }
        return data

    def format_data(self, data):
        data = {
            "email": data["email"],
            "name": data["name"],
            "region": data["region"],
            "province": data["province"],
        }
        return data

# if __name__ == "__main__":
#     a = Authentication()

#     data = {
#         "n_id": "12345678",
#         "prefix": "นาย",
#         "name": "สวัสดี",
#         "surname": "ครับ",
#         "phone": "0811111111",
#         "email": "testja@gmail.com",
#         "category": ["ตาบอด", "หูหนวก"],
#         "password": "testjha11",
#         "role": "pwd"
#     }

    # data = {
    #     "name": "ฮ่าๆๆ",
    #     "region": "กลาง",
    #     "province": "กรุงเทพ",
    #     "email": "comp@gmail.com",
    #     "password": "testjha11",
    #     "role": "company"
    # }

    # a.register(data)
