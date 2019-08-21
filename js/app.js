if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    console.log('Bro');
    navigator.serviceWorker.getRegistration().then(function(reg) {
      console.log('LoL');
      reg.showNotification('Hello world!');
    });
  }
}