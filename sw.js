conts cacheName = "noticia-v1"
conts files=[
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
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
    "Tecnologia reaproxima familiares e pacientes da Covid-19 em hospital de campanha em SP.html",
    "https://www.tecmundo.com.br/produto/152373-quer-saber-monitor-comprar-confira-5-opcoes-acessiveis.htm",
    "https://www.tecmundo.com.br/mercado/153262-chip-quantico-deve-quebrar-criptografia-bitcoin-2-anos.htm",
    "https://www.tecmundo.com.br/software/153253-mozilla-encerrara-suporte-adobe-flash-firefox-84.htm"

    
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
})
