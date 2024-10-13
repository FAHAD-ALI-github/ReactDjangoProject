from django.shortcuts import render, HttpResponse
from .serializer import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password


# Create your views here.
class AllUsers(APIView):
    def get(self, request):
        # Fetch all users from the database
        all_users = GymUser.objects.all()
        # Serialize the users to JSON
        serialize = UserSerializer(all_users, many=True)
        # Return the serialized data in the response
        return Response(serialize.data)

class AddUser(APIView):
    def get(self, request):
        # Fetch all users from the database
        all_users = GymUser.objects.all()
        # Serialize the users to JSON
        serialize = UserSerializer(all_users, many=True)
        # Return the serialized data in the response
        return Response(serialize.data)

    def post(self, request):
        # Deserialize the incoming JSON to a GymUser instance
        data = request.data.copy()
        
        # Hash the password before saving
        if 'password' in data:
            data['password'] = make_password(data['password'])
        
        serializeObj = UserSerializer(data=data)
        if serializeObj.is_valid():
            # Save the new user to the database if the data is valid
            serializeObj.save()
            return Response(200)
        else:
            # Return errors if the data is not valid
            return Response(serializeObj.errors, 400)


class LoginView(APIView):
    def post(self, request):
        # Extract username and password from the request data
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            # Check if a user with the given username exists
            user = GymUser.objects.get(username=username)
        except GymUser.DoesNotExist:
            # Return an error if the username does not exist
            return Response({"error": "Username not found"}, status=404)

        # Verify the password using Django's check_password function
        if check_password(password, user.password):
            # Serialize the user data if the password matches
            serialize = UserSerializer(user)
            return Response(serialize.data, status=200)
        else:
            # Return an error if the password does not match
            return Response({"error": "Incorrect password"}, status=400)

class DeleteUser(APIView):
    def delete(self, request, id):
        try:
            # Find the user by id
            user = GymUser.objects.get(pk=id)
            # Delete the user from the database
            user.delete()
            return Response({"message": "User deleted successfully"}, status=200)
        except GymUser.DoesNotExist:
            # Return an error if the user does not exist
            return Response({"error": "User not found"}, status=404)


class UpdateUser(APIView):
    def put(self, request, id):
        try:
            # Find the user by id
            user = GymUser.objects.get(id=id)

            # Copy request data to avoid directly modifying it
            data = request.data.copy()

            # Check if email is being updated
            if 'email' in data and data['email'] == user.email:
                data.pop('email')
                
            # Check if phone_number is being updated
            if 'phone_number' in data and data['phone_number'] == user.phone_number:
                data.pop('phone_number')
                
            # Check if username is being updated
            if 'username' in data and data['username'] == user.username:
                data.pop('username')

            # Update the user's information
            serializeObj = UserSerializer(user, data=data, partial=True)
            if serializeObj.is_valid():
                # Check if the password is being updated
                if 'password' in request.data:
                    serializeObj.validated_data['password'] = make_password(request.data['password'])
                # Save the updated user information
                serializeObj.save()
                return Response({"message": "User updated successfully"}, status=200)
            else:
                # Return errors if the data is not valid
                return Response(serializeObj.errors, status=400)
        except GymUser.DoesNotExist:
            # Return an error if the user does not exist
            return Response({"error": "User not found"}, status=404)
