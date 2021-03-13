const http = require("http");
var fs = require("fs");

function serveStaticFile(response, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" })
            response.end("Internal error with a response code 500")
        } else {
            response.writeHead(responseCode, { "Content-Type": contentType });
            response.end(data)
        }
    })
}

http.createServer(function(request, response) {
    var path = request.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            serveStaticFile(response, "/index.html", "text/html");
            break;
        case "/style.css":
            serveStaticFile(response, "/style.css", "text/css");
            break;
        case "/img/welcome":
            serveStaticFile(response, "/img/welcome.jpg", "image/jpeg");
            break;
        case "/img/about":
            serveStaticFile(response, "/img/about.jpg", "image/jpeg");
            break;
        case "/img/cry":
            serveStaticFile(response, "/img/cry.jpg", "image/jpeg");
            break;
        case "/about":
            serveStaticFile(response, "/about.html", "text/html");
            break;
        case "/img/gallery/graduation":
            serveStaticFile(response, "/img/gallery/graduation.jpg", "image/jpeg");
            break;
        case "/img/gallery/study":
            serveStaticFile(response, "/img/gallery/study.jpg", "image/jpeg");
            break;
        case "/video/memes":
            serveStaticFile(response, "/video/students/memes.mp4", "video/mp4");
            break;
        case "/script.js":
            serveStaticFile(response, "/script.js", "text/js");
            break;
        default:
            serveStaticFile(response, "/error.html", "text/html", 404);
            break;
    }

}).listen(3000);

console.log("Check the server")