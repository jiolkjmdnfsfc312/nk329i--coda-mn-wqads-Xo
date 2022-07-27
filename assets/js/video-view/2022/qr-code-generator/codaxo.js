const firebaseConfig = {
  apiKey: "AIzaSyDS2omak6gurZyVvXCgi-wHS2nHv5KB1Nc",
  authDomain: "codaxoid-view-video.firebaseapp.com",
  databaseURL: "https://codaxoid-view-video-default-rtdb.firebaseio.com",
  projectId: "codaxoid-view-video",
  storageBucket: "codaxoid-view-video.appspot.com",
  messagingSenderId: "56938025945",
  appId: "1:56938025945:web:3e0682f1e470d905a1bfc8",
  measurementId: "G-RSQ25ZQEKM"
};
firebase.initializeApp(firebaseConfig);

const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";

const db = firebase.database().ref("View QR Code Generator |  HTML CSS & JavaScript");
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