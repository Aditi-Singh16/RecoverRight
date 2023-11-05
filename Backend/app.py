# app.py
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
from flask_cors import CORS

# Load the model
model = pickle.load(open('../Data/model.pkl', 'rb'))
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
def index():
    # try:
        # Get data from POST request
    data = request.get_json()
    # Convert data into DataFrame
    # diagnose = data['diagnosis']
    # weight = int(data['patientweight'])
    # del data['diagnosis']
    # del data['patientweight']
    # other = []
    # for k,v in data.items():
    #     other.append(int(v))
    # other.append(diagnose)
    # other.append(weight)
    # data = np.array(other).reshape(1, -1)
    # print(data)
    # data = pd.DataFrame(data)
    df = pd.DataFrame(columns= data.keys())
    df = df._append(data, ignore_index=True)

    # row = []
    # for k,v in data.items():
    #     row.append(v)
    
    # Make prediction
    print(df)
    prediction = model.predict(df)
    print("Hey")
    # Return results
    return jsonify({'prediction': int(prediction[0])})
    
    # except Exception as e:
    #     return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
