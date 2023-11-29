document.querySelector('.menu-bar').addEventListener('click', function() {
    document.querySelector('.nav-options').classList.add('visible');
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-options').classList.remove('visible');
  });
  