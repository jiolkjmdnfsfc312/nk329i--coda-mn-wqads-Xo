var config = {
  apiKey: "AIzaSyCoesHJx5gUBW_gZe9MbIZW6gJfGJABDqY",
  authDomain: "codaxo-report-channel.firebaseapp.com",
  databaseURL: "https://codaxo-report-channel-default-rtdb.firebaseio.com",
  projectId: "codaxo-report-channel",
  storageBucket: "codaxo-report-channel.appspot.com",
  messagingSenderId: "60894167645",
  appId: "1:60894167645:web:f57a0fe1dfb60c9c6203b4",
  measurementId: "G-2K0LJP753C"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Report Channel Codaxo');
  
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