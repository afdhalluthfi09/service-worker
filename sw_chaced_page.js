//melakukan penginstalan service worker
const cacheName='v1'; //membuat Namachced
const cacheAssets=[   //mendafatarkan seluruh file app yang sudah dibuat
    'index.html',
    'js/main.js'
];
//mendaftarkan file web
self.addEventListener('install',(e)=>{
    console.log('Service Worker: Installed');   
    
    e.waitUntil(
        caches
         .open(cacheName)
         .then(cache=>{
             console.log('Service Worker: Caching File');
             cache.addAll(cacheAssets);
         })
         .then( () => self.skipWaiting())
    );
});

self.addEventListener('activate',e=>{
    console.log('Service Worker : Activated');
    //menghapus cache
    e.waitUntil(
        caches.keys().then(cacheNames=>{
                return Promise.all(
                    cacheNames.map(cache =>{
                        if(cache !== cacheName){
                            console.log('Service Worker : Sedang dihapus simpanan Lama');
                            return caches.delete(cache);
                        }
                    })
                )
            })
    )
});

// mebuat web offline
self.addEventListener('fetch', e =>{
    console.log('Service Worker : Sedang Mengambil Data');
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))
    )
})