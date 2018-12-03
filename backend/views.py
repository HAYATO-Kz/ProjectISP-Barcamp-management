import logging

from rest_framework import generics,status
from rest_framework.response import Response
from .serializers import UserSerializer, TopicSerializer
from .models import User, Topics

logger = logging.getLogger(__name__)

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

class TopicListCreate(generics.ListCreateAPIView):
    queryset = Topics.objects.all()
    serializer_class = TopicSerializer

    def get(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        logger.info('{0} load topics data'.format(ip))
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        logger.info('{0} post toppic'.format(ip))
        return self.create(request, *args, **kwargs)

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        logger.info('{0} load user data'.format(ip))
        return self.list(request, *args, **kwargs)

class UpdateVote(generics.UpdateAPIView):
    queryset = Topics.objects.all()
    serializer_class = TopicSerializer

    def put(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        logger.info('{0} vote toppic'.format(ip))
        return self.update(request, *args, **kwargs)

class UpdateUserVote(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def put(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        logger.info('{0} update user votes'.format(ip))
        return self.update(request, *args, **kwargs)