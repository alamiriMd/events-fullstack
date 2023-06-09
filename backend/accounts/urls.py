from django.urls import path
from .views import (
    login_view,
    register_view,
    logout_view,
    user_view,
)


urlpatterns = [
    path('login', login_view, name='login'),
    path('register', register_view, name='register'),
    path('logout', logout_view, name='logout'),
    path('get-user', user_view, name='get-user'),
]