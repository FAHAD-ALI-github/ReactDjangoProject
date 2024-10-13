"""
URL configuration for DRF_gymAPI project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from .views import *

urlpatterns = [

    # URL for getting all users
    path('allusers/', AddUser.as_view(), name='all_users'),

    # URL for adding a new user 
    path('adduser/', AddUser.as_view(), name='add_user'),
    
    # URL for logging in a user
    path('login/', LoginView.as_view(), name='login'),

    # URL for deleting a user by id
    path('delete/<int:id>/', DeleteUser.as_view(), name='delete_user'),

    # URL for updating a user by id
    path('update/<int:id>/', UpdateUser.as_view(), name='update_user'),

]
