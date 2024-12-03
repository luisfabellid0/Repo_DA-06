from django.urls import path, include
from rest_framework import routers
from .views import AlbumesView

router = routers.DefaultRouter()
router.register(r'spotify', AlbumesView)

urlpatterns = [
    path('', include(router.urls)),
]
