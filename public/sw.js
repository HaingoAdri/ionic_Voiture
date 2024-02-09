/*self.addEventListener('push', function(event) {
    const data = event.data.json();

    const options = {
        body: data.body,
        icon: '../car2.png',
        badge: '../car2.png',
        data: data
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('message', function(event) {
    const data = event.data;

    const options = {
        body: data.body,
        icon: '../car2.png',
        badge: '../car2.png',
        data: data
    };

    self.registration.showNotification(data.title, options);
});*/