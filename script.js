window.addEventListener('load', function() {
  var splashContainer = document.getElementById('splash-container');
  var contentContainer = document.getElementById('content');
  var skipButton = document.getElementById('skip-button');
  var splashVideo = document.getElementById('splash-video');

  skipButton.addEventListener('click', function() {
    splashContainer.style.display = 'none';
    contentContainer.style.display = 'block';
  });

  splashVideo.addEventListener('ended', function() {
    splashContainer.style.display = 'none';
    contentContainer.style.display = 'block';
  });
});
