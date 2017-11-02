from socketIO_client_nexus import SocketIO, BaseNamespace
from base64 import b64encode

lgo = 1
pharma = 43

def on_curl(*args):
    print 'on_curl {}'.format(args)

def on_curl_lgo(*args):
    print 'on_curl_lgo {}'.format(args)

def on_curl_lgo_pharma(*args):
    print 'on_curl_lgo_pharma {}'.format(args)

with SocketIO('localhost', 3000, headers={'Authorization': 'Basic ' + b64encode('username:password')}) as socketIO:
    socketIO.on('/curl', on_curl)
    socketIO.on('/curl/{}'.format(lgo), on_curl_lgo)
    socketIO.on('/curl/{}/{}'.format(lgo, pharma), on_curl_lgo_pharma)
    socketIO.wait()
