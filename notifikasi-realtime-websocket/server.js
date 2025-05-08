const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const notifications = [
  { type: 'message', content: 'You have a new message!' },
  { type: 'order', content: 'Your order has been shipped!' },
  { type: 'reminder', content: 'Reminder: Meeting at 3 PM.' },
  { type: 'comment', content: 'New comment on your post.' },
];

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Mengirimkan notifikasi acak setiap 5 detik
  setInterval(() => {
    const randomNotification =
      notifications[Math.floor(Math.random() * notifications.length)];
    const message = JSON.stringify(randomNotification);
    ws.send(message); // Kirim notifikasi ke klien
  }, 5000); // Kirim setiap 5 detik
});

console.log('WebSocket server is running on ws://localhost:8080');
