from django.urls import path
from .views import RegisterView, MyTokenObtainPairView, dashboard
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('dashboard/', dashboard, name='dashboard'),
    path("token/refresh/",TokenRefreshView.as_view()),
]
