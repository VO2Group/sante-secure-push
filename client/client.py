from socketIO_client_nexus import SocketIO, LoggingNamespace

def on_from_js(*args):
    print('from js', args)

with SocketIO('localhost', 3000, LoggingNamespace) as socketIO:
    socketIO.on('from js', on_from_js)
    socketIO.emit('from python', { 'hello': 'world' })
    socketIO.wait(seconds=1)
