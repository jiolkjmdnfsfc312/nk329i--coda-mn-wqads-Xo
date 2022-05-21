var config = {
    apiKey: "AIzaSyD-mC8HbU4SLdyiRPFWaXE5S91UWxivzyc",
  authDomain: "codaxoid.firebaseapp.com",
  databaseURL: "https://codaxoid-default-rtdb.firebaseio.com",
  projectId: "codaxoid",
  storageBucket: "codaxoid.appspot.com",
  messagingSenderId: "890333019719",
  appId: "1:890333019719:web:1a39e9c05a81350154bb62",
  measurementId: "G-P5CWST0D2X",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Contact Footer Menu');
  
  function reset() {
    document.getElementById("Report-Channel").reset();
  }
  
  // Listen for form submit
  document.getElementById('Report-Channel').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var report = getInputVal('report');
  
    // Save message
    saveMessage(report);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(report) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      report: report,
    });
  }