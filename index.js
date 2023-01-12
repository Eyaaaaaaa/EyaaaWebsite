document.addEventListener("DOMContentLoaded", function() {
    // Show the age verification modal on page load
    document.getElementById("age-verification").style.display = "block";
  
    // Add event listeners to the "Yes" and "No" buttons
    document.getElementById("yes-button").addEventListener("click", function() {
      // Allow the user to continue if they click "Yes"
      document.getElementById("age-verification").style.display = "none";
    });
    document.getElementById("no-button").addEventListener("click", function() {
      // Show the age verification message
      document.getElementById("age-verification-message").style.display = "block";
    });
  });
  
  if (screen.width <= 600) {
    // styles for mobile
    $('.age-verification-modal').css({'width':'90%','height':'90%'});
  }
  
