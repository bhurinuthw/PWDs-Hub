import requests

class QueryManager:
    @staticmethod
    def getById(json_data, id_key):
        for element in json_data:
            if(json_data[element]['uid'] == id_key):
                response = json_data[element]
                return response
        return None