// // Check if the browser supports the Notification API
// if (!("Notification" in window)) {
//    alert("This browser does not support system notifications");
// } else {
//    // Request permission to show notifications
//    Notification.requestPermission().then(function (permission) {
//       if (permission === "granted") {
//          // Create and display a notification
//          var notification = new Notification("Hello, World!", {
//             body: "This is a notification from JavaScript."
//          });

//          setTimeout(function () {
//             notification.close();
//          }, 5000);
//       } else {
//          alert("Permission denied for notifications");
//       }
//    });
// }

const root = document.documentElement;
root.style.setProperty('--body-w', `${window.innerWidth}px`);
root.style.setProperty('--body-h', `${window.innerHeight}px`);
