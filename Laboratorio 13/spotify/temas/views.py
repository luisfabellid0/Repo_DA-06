from rest_framework import viewsets
from .models import Album
from .serializers import AlbumSerializer

class AlbumesView(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
