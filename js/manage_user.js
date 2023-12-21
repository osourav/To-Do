
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      console.log('User is signed in:', user.displayName);
   } else {
      console.log('User is signed out');
   }
});

function logIn() {

   const provider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(provider)
      .then((result) => {
         const credential = result.credential;
         const token = credential.accessToken;
         const user = result.user;

         console.log(user);
      }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         const email = error.email;
         const credential = error.credential;
      });
}