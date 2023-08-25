self.addEventListener('install', async event => {
    console.log('Intalando el service worker...');
    self.skipWaiting();
});

//una forma de saltarse para que la app sea offline, uno de los requisitos que pide PWA
self.addEventListener('fetch', event => {
    return null;
})