/**
 * Service Worker
 */

let version = '1.0.0';

let files = [
    // '/', TEMPORARY

    '/pwa/', // TEMPORARY

    /* CSS */
    'css/bootstrap.min.css',
    'css/style.css',

    /* Fonts */
    'fonts/glyphicons-halflings-regular.eot',
    'fonts/glyphicons-halflings-regular.svg',
    'fonts/glyphicons-halflings-regular.ttf',
    'fonts/glyphicons-halflings-regular.woff',
    'fonts/glyphicons-halflings-regular.woff2',

    /* JavaScript */
    'js/lib/jquery-3.1.1.min.js',
    'js/lib/bootstrap.min.js',
    'js/lib/moment.min.js',

    'js/currencies.js',
    'js/global-vars.js',
    'js/exchange-rate.js',
    'js/change-currency.js',
    'js/select-currency.js',
    'js/script.js'
];

let oldVersions = [];


self.addEventListener('activate', () => {
    let cacheName = 'files-' + version;
    caches.open(cacheName).then(cache => {
       cache.addAll(files).then( () => {
           oldVersions.map(name => {
               caches.delete(name);
           });
       });
    });
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
});