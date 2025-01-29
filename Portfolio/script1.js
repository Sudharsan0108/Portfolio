$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    
  });

  // Skills data
const skillsData = {
  labels: ['R Programming', 'Pentaho', 'Python','Html&Css','Javascript'],
  datasets: [{
      label: 'Skill Level',
      data: [75, 80, 75,95,75], // Update these values with your skill levels
      backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red color for R Programming
          'rgba(54, 162, 235, 0.6)', // Blue color for Pentaho
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 0, 0, 0.6)',
          'rgba(255, 165, 0, 0.6)',// Yellow color for Python
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
  }]
};

// Create bar chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
  type: 'bar',
  data: skillsData,
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});