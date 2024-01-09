from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"form*": {"origins": "http://localhost:3000"}})
app.config.from_object(Config)
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()

from app.routes import *

@app.route('/')
def index():
    return jsonify({'message': "Ok"})