importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// You MUST hardcode your exact Firebase config here for the background worker to function
firebase.initializeApp({
  apiKey: "AIzaSyD5ch9QflS16D3Jo7ZuCv5hdhttY19lXAg",
  projectId: "chool-1b948",
  messagingSenderId: "496407995010",
  appId: "1:496407995010:web:0dae0f1305c0d3171e0a9b"
});

const messaging = firebase.messaging();