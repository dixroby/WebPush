self.addEventListener('install', async event => {
    console.log('Intalando el service worker...');
    self.skipWaiting();
});