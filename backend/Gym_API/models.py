from django.db import models

class GymUser(models.Model):
    
    # primary key is id. 
    id = models.AutoField(primary_key=True)

    # CharField for storing first name of the user.
    first_name = models.CharField(max_length=50)

    # CharField for storing last name of the user.
    last_name = models.CharField(max_length=50)

    # DateField for storing date of birth.
    date_of_birth = models.DateField()

    # EmailField for storing user's email.
    email = models.EmailField(unique=True)

    # CharField for storing user's phone number.
    phone_number = models.CharField(max_length=15, unique=True)

    # FloatField for storing user's weight in kilograms.
    weight = models.FloatField()

    # FloatField for storing user's height in centimeters.
    height = models.FloatField()

    # CharField for storing unique username for the user.
    username = models.CharField(max_length=30, unique=True)

    # CharField for storing user's password.
    password = models.CharField(max_length=128)

    # Gender field with male or female choice.
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        default='M'
    )

    def __str__(self):
        # String representation of the GymUser object.
        return f'{self.first_name} {self.last_name}'

