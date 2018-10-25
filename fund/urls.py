from django.urls import include, path

from fund.views import ProjectDetailAPIView, ProjectListAPIView


urlpatterns = [
    path('projects/', ProjectListAPIView.as_view()),
    path('projects/details/', ProjectDetailAPIView.as_view()),
]
