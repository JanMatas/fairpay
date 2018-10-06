const publicVapidKey = "BN3B4f3H6zHcX7nvnOQTMt4PjnfVeAzbg_PK5bjOFtDbNs8uKKmoCEClEODkgi9eT4zqacbnqznWnODbX5_yvTk";
const server_url = "http://localhost:9898"
// Check for service worker

var userId = prompt("UserId: ", 1) 


if (Notification.permission !== "granted") {
    if ("serviceWorker" in navigator) {
        send().catch(err => console.error(err));
    }
}
// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
  console.log("Service Worker Registered...");

  // Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log(subscription)
  console.log("Push Registered...");
  var message = {}
  message["token"] = JSON.stringify(subscription)
  message["userId"] = userId
  JSON.stringify(subscription)
  // Send Push Notification
  console.log("Sending Push...");
  await fetch(server_url + "/pushnotification_reg", {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
