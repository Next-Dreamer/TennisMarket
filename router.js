function route(pathname, handle, request, response, productId) {
    console.log('pathname : ' + pathname);

    // pathname = pathname.replace('.html', '');

    if (typeof handle[pathname] == 'function') {
        handle[pathname](request, response, productId);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end();
    }
    
}

exports.route = route;