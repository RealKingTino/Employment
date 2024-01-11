#!/usr/bin/python3

from flask import jsonify, request
from flask_cors import cross_origin
from app import app, db
from app.forms import ApplicationForm
from app.models import Applicant
from sqlalchemy.exc import IntegrityError

# Add OPTIONS method to handle CORS preflight requests
@app.route('/form', methods=['POST', 'OPTIONS'])
@cross_origin(origin='http://localhost:3000', headers=['Content-Type'])
def form():
    app.logger.info('Received request to /form')

    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    try:
        json_data = request.get_json()
        print('Received JSON data:', json_data)
        if not json_data:
            return jsonify({'error': 'Invalid request. JSON data is missing.'}), 400

        for field in ['email', 'phone_number', 'bank_name']:
            if json_data.get(field) == '':
                json_data[field] = None

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
        app.logger.info('User added to the session, committing changes...')
        db.session.commit()
        app.logger.info('Changes committed successfully.')

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
            return jsonify({'error': f'IntegrityError: {str(e)}'}), 500

    except Exception as e:
        
        app.logger.error(f"Unexpected error: {e}")
        # Handle other exceptions
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500


@app.route('/applicants', methods=['GET'])
def get_applicants():
    try:
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

    except Exception as e:
        # Handle other exceptions
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500