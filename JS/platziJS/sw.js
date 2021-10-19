const VERSION = "v1"

self.addEventListener('install', event => {
    event.waitUntil(precache());
});


self.addEventListener('fetch', event => {
    const request = event.request;

    //Si el método del request no es GET, no hacemos nada
    if(request.method !== "GET"){
        return;
    }

    //buscamos en cache:
    event.respondWith(cacheResponse(request));

    //actualizamos la caché cada vez que hacemos una petición y el usuario tiene conexión:
    event.waitUntil(updateCache(request));
})



async function cacheResponse(request){
    const cache = await caches.open(VERSION);

    //si se encuentra en la cache la solicitud que está haciendo el usuario...
    const response = await cache.match(request);

    //si ya está en caché retornela, de lo contrario haga la peticicón normal
    //pero es peligroso, porque el usuario podría quedar siempre con una 
    //versión desactualizada de los datos:
    return response || fetch(request);



}

async function precache(){
 const cache = await caches.open(VERSION);
 //al pasarlo a typescript, estos archivos dejan de existir porque el parsel pasa todo esto a una carpeta dist
 //y les cambia el nombre, sin embargo, no son necesarios porque el método updateCache, hace un put cada vez
 //que se hace un fetch. Por eso esta comentado.
 return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
 ]);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}