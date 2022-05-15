const firebaseConfig = {
   apiKey: "AIzaSyD-mC8HbU4SLdyiRPFWaXE5S91UWxivzyc",
   authDomain: "codaxoid.firebaseapp.com",
   databaseURL: "https://codaxoid-default-rtdb.firebaseio.com",
   projectId: "codaxoid",
   storageBucket: "codaxoid.appspot.com",
   messagingSenderId: "890333019719",
   appId: "1:890333019719:web:1a39e9c05a81350154bb62",
   measurementId: "G-P5CWST0D2X"
};
firebase.initializeApp(firebaseConfig);

const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";

const db = firebase.database().ref("View Clock Light & Dark Ui Design Using HTML CSS & JavaScript");
db.on("value", (snapshot) => {
 hitCounter.textContent = snapshot.val().toLocaleString().replaceAll(',', '.');
});

db.transaction(
 (totalHits) => totalHits + 1,
 (error) => {
   if (error) {
     console.log(error);
   } else {
     hitCounter.style.display = "inline-block";
   }
 }
);

const userCookieName = "returningVisitor";
checkUserCookie(userCookieName);

function checkUserCookie(userCookieName) {
 const regEx = new RegExp(userCookieName, "g");
 const cookieExists = document.cookie.match(regEx);
 if (cookieExists != null) {
   hitCounter.style.display = "inline-block";
 } else {
   createUserCookie(userCookieName);
   db.transaction(
     (totalHits) => totalHits + 1,
     (error) => {
       if (error) {
         console.log(error);
       } else {
         hitCounter.style.display = "inline-block";
       }
     }
   );
 }
}