document.addEventListener('DOMContentLoaded', function() {
    fetch('https://leetcode-api-faisalshohag.vercel.app/001patilritesh')
      .then(response => response.json())
      .then(data => {
        document.getElementById('totalSolved').textContent = data.totalSolved;
        document.getElementById('easy').textContent = data.easySolved;
        document.getElementById('med').textContent = data.mediumSolved;
        document.getElementById('hard').textContent = data.hardSolved;
        document.getElementById('rank').textContent = data.ranking;
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  

