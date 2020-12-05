const cacheName = "noticia-v1"
const files=[
    "/blog_Noticia/",
    "/blog_Noticia/index.html",
    "/blog_Noticia/script.js",
    "/blog_Noticia/style.css",
    "/blog_Noticia/Tecnologia reaproxima familiares e pacientes da Covid-19 em hospital de campanha em SP.html",
    "/blog_Noticia/contato.html",
    "/blog_Noticia/estilo2.css",
    "/blog_Noticia/estilo3.css",
    "/blog_Noticia/estiloos.css",
    "/blog_Noticia/sobre.html",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
    "https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css",
    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    "https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js",
    "https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"
]

self.addEventListener('install', function(evt){
   console.log("install sw");
   evt.waitUntil(
 caches.open(cacheName).then(function(cache){
     console.log("colocando arquivos na cache")
     cache.addAll(files)
})
)
})
self.addEventListener('activate', function(evt){
   console.log("activate sw");
})

self.addEventListener('fetch', function(evt){
   console.log("fetch sw");
    evt.respondWith(
caches.match(evt.request).then(function(res){
 return res || fetch(evt.request)
})
)
})
