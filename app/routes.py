#!/usr/bin/python3

from flask import jsonify, request
from app import app, db
from app.forms import ApplicationForm
from app.models import Applicant
from sqlalchemy.exc import IntegrityError

@app.route('/form', methods=['POST'])
def form():
    try:
        json_data = request.get_json()
        if json_data:
            user = Applicant(
                first_name=json_data.get('first_name'),
                middle_name=json_data.get('middle_name'),
                last_name=json_data.get('last_name'),
                email=json_data.get('email'),
                phone_number=json_data.get('phone_number'),
                address=json_data.get('address'),
                bank_name=json_data.get('bank_name'),
                position=json_data.get('position')
            )

            db.session.add(user)
            db.session.commit()

            user_dict = {
                'id': user.id,
                'first_name': user.first_name,
                'middle_name': user.middle_name,
                'last_name': user.last_name,
                'email': user.email,
                'phone_number': user.phone_number,
                'address': user.address,
                'bank_name': user.bank_name,
                'position': user.position,
                'timestamp': user.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            }

            return jsonify({'user': user_dict})

    except IntegrityError as e:
        db.session.rollback()

        # Check if the error is due to a duplicate email or phone number
        if "UNIQUE constraint failed: applicant.email" in str(e):
            return jsonify({'error': 'Email must be unique.'}), 400
        elif "UNIQUE constraint failed: applicant.phone_number" in str(e):
            return jsonify({'error': 'Phone number must be unique.'}), 400
        else:
            # Handle other IntegrityErrors or provide a generic message
            return jsonify({'error': 'An error occurred while submitting the form.'}), 500

    except Exception as e:
        # Handle other exceptions
        print(f"Unexpected error: {e}")
        return jsonify({'error': 'An unexpected error occurred.'}), 500

    return jsonify({"error": "Invalid request"})

@app.route('/applicants', methods=['GET'])
def get_applicants():
    applicants = Applicant.query.all()

    applicants_list = []
    for user in applicants:
        user_dict = {
            'id': user.id,
            'first_name': user.first_name,
            'middle_name': user.middle_name,
            'last_name': user.last_name,
            'email': user.email,
            'position': user.position,
            'phone_number': user.phone_number,
            'address': user.address,
            'bank_name': user.bank_name,
            'timestamp': user.timestamp.strftime('%Y-%m-%d %H:%M:%S')
        }
        applicants_list.append(user_dict)

    return jsonify({'applicants': applicants_list})
