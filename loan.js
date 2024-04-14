// scripts.js

document.getElementById('loanForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  
  fetch('/applyLoan', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Show popup
    document.getElementById('popup').style.display = 'block';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Thanks for showing interest, We will get back to you!!');
  });
});

// Close popup when close button is clicked
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});


// Close popup when close button is clicked
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
