self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'air chat';
    const options = {
        body: data.body || 'Новое уведомление!',
        icon: 'https://via.placeholder.com/192',
        badge: 'https://via.placeholder.com/192'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
