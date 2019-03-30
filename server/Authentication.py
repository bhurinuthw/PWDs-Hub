import pyrebase
import json
import requests

from flask import request

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
        print(type(request.get_json(silent=True)))
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
        data['uid'] = uid
        results = db.child("PWD_users").push(data, user['idToken'])
        results = db.child("roles").push('pwd', user['idToken'])

    def createNewUser(self, email, password, role, data):
        auth = self.firebase.auth()
        db = self.firebase.database()
        user = auth.sign_in_with_email_and_password(email, password)
        uid = auth.get_account_info(user['idToken'])['users'][0]['localId']
        data['uid'] = uid
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
            "img_url": "",
            "province": "",
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

    # data = {
    #     "n_id": "12345678",
    #     "prefix": "นาย",
    #     "name": "สวัสดี",
    #     "surname": "ครับ",
    #     "phone": "0811111111",
    #     "email": "pwd1@gmail.com",
    #     "category": ["ตาบอด", "หูหนวก"],
    #     "password": "testjha11",
    #     "role": "pwd"
    # }

#     data = {
#         "name": "ฮ่าๆๆ",
#         "region": "กลาง",
#         "province": "กรุงเทพ",
#         "email": "com@gmail.com",
#         "password": "testjha11",
#         "role": "company"
#     }

#     a.register(data)

# import xlrd
# import random
# from faker import Faker

# cate = ["การมองเห็น",
#         "การได้ยิ้น",
#         "การเคลื่อนไหว",
#         "จิตใจ",
#         "สติปัญญา",
#         "การเรียนรู้",
#         "ออทิสติก"]

# loc = ("mock.xlsx")

# wb = xlrd.open_workbook(loc)
# sheet = wb.sheet_by_index(0)

# print(sheet.cell_value(1, 0))

# print(sheet.ncols)

# fake = Faker()

# for i in range(1, 100):
#     n_id = sheet.cell_value(i, 0)
#     prefix = sheet.cell_value(i, 1)
#     name = sheet.cell_value(i, 2).split()[0].encode("utf8")
#     print(name)
#     phone = sheet.cell_value(i, 8)
#     department = sheet.cell_value(i, 12)
#     company = sheet.cell_value(i, 15)
#     province = sheet.cell_value(i, 7)
#     description = fake.text()
#     email = fake.email()
#     category = random.shuffle(cate)


#     data = {
#             "email": email,
#             "n_id": n_id,
#             "prefix": prefix,
#             "name": name,
#             "surname": surname,
#             "phone": phone,
#             "description": description,
#             # "category": category,
#             "department": department,
#             "company": company,
#             "img_url": "",
#             "province": province,
#         }

#     print(data)
