# import firebase_admin
import logging

# from firebase_admin import credentials
# from firebase_admin import auth
from django.shortcuts import render

# cred = credentials.Certificate('serviceAccountKey.json')
# default_app = firebase_admin.initialize_app(cred)

# def config():
#     logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s', datefmt='%Y-%m-%d %I:%M:%S', filename='barcamp.log', level=logging.DEBUG)
#     pass

logger = logging.getLogger(__name__)

def index(request):
    # email = ''
    # user = auth.get_user_by_email(email)
    # if user != '':
    #     print('yes')
    # logging.info("{0} {1}".format(get_client_ip(request), auth.get_user(uid).display_name))
    # else:
    #     print('no')

    # for user in auth.list_users().iterate_all():
    #     print('User: ' + user.uid)
    # config()

    # ip = get_client_ip(request)
    # r_path = request.path

    # if r_path == '/speaker':
    #     logging.info('{0} login to speaker page'.format(ip))
    # elif r_path == '/attendee':
    #     logging.info('{0} login to attendee page'.format(ip))
    # elif r_path == '/':
    #     logging.info('{0} home page'.format(ip))
    loggins(request)

    return render(request, 'frontend/index.html')

def loggins(request):
    ip = get_client_ip(request)
    r = request.path

    if r == '/speaker':
        logger.info('{0} sigin to speaker page'.format(ip))
    elif r == '/attendee':
        logger.info('{0} sigin to attendee page'.format(ip))
    elif r == '/':
        logger.info('{0} sigin to home page'.format(ip))

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip