document.addEventListener("DOMContentLoaded", event => {
    const firebaseConfig = {
        apiKey: "AIzaSyA5YgrHCxD6MMVHSgBjt5Ui65eTD2I4Kys",
        authDomain: "semaapp-7273a.firebaseapp.com",
        databaseURL: "https://semaapp-7273a.firebaseio.com",
        projectId: "semaapp-7273a",
        storageBucket: "semaapp-7273a.appspot.com",
        messagingSenderId: "836280552359",
        appId: "1:836280552359:web:faf2b72393e578ef"
      };
    firebase.initializeApp(config);
    var db = firebase.firestore();
    const app = firebase.app();
    console.log(app)
});

function uploadFile(files){
    const ref = firebase.storage().ref();
const file = document.querySelector('#photo').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.typea
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('#someImageTagID').src = url;
  })
  .catch(console.error);
}

function googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

            .then(result=> {
                const user = result.user;
                document.write("Hello ${user.displayName}");
                console.log()
            })
            .catch(console.log)
}