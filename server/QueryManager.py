import requests

class QueryManager:
    @staticmethod
    def getById(json_data, id_key):
        for element in json_data:
            if(json_data[element]['uid'] == id_key):
                response = data[user]
                return response
        return None
