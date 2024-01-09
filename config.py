#!/usr/bin/python3
import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///employment.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'Iamthegreatestofalltime'