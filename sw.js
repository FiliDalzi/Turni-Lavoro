// Installa il service worker
self.addEventListener('install', event => {
    console.log('Service Worker installato');
    self.skipWaiting();
});

// Attiva il service worker
self.addEventListener('activate', event => {
    console.log('Service Worker attivo');
    self.clients.claim();
});

// Gestisce le richieste di rete (fetch)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Se sei offline, puoi anche restituire una pagina statica
            return new Response("Offline: nessuna connessione");
        })
    );
});
