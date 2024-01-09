#!/usr/bin/python3

from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, Email


class ApplicationForm(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired(), Length(max=64)])
    middle_name = StringField("Middle Name", validators=[Length(max=64)])
    last_name = StringField("Last Name", validators=[DataRequired(), Length(max=64)])
    email = StringField("Email", validators=[DataRequired(), Email()])
    position = SelectField("Position",  validators=[DataRequired(), Length(max=50)])
    phone_number = StringField("Phone Number", validators=[DataRequired(), Length(max=20)])
    address = StringField("Address", validators=[DataRequired(), Length(max=256)])
    bank_name = StringField("Bank Name", validators=[DataRequired(), Length(max=64)])
    submit = SubmitField("Apply")

    def validate(self, data):
        super().validate()

def validate_json_data(form, field):
    if not isinstance(field.data, str):
        raise ValueError("Invalid JSON data: must be a string.")