//cek apakah suppor service worker ??
if('serviceWorker' in navigator ){
    //console.log("support service worker") //setelah melakukan pengecekan saatnya mendaftarkan service worker kite
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('../sw_chaced_page.js')
        .then(reg=> console.log('sudah terdaftar'))
        .catch(err=> console.log(`service worker erro : ${err}`));
    });
}