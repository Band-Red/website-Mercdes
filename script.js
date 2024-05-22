document.addEventListener('DOMContentLoaded', (event) => {
    const introImage = document.getElementById('introImage');
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');


    const gifDuration = 15000; 

    setTimeout(() => {
        intro.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto'; 
    }, gifDuration);
});

document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector("video");
  const bodyHome = document.querySelector(".body-Home");
  const bodySpace = document.querySelector(".body-Space");
  const clickBtn = document.querySelector(".click-btn");

  const onOff = document.querySelector(".on-off");
  onOff.addEventListener("click", function() {
      bodyHome.style.display = "none";
      bodySpace.style.display = "block";
      video.play();
  });

  video.addEventListener("ended", function() {
      bodyHome.style.display = "block";
      bodySpace.style.display = "none";
      clickBtn.style.display = "block";
  });
});








// $(document).ready(function() {
//     $(".on-off").click(function() {
//       var video = document.createElement('video');
//       video.src = 'path_to_your_video.mp4';
//       video.autoplay = true;
//       video.controls = true;
//       video.loop = false;
//       video.volume = 1; 
//       $(".body-Home").css('background-image', 'none'); 
//       $(".body-Home").append(video);
//     });
//   });

// $(document).ready(function() {
//     const introImage = $('#introImage');
//     const intro = $('#intro');
//     const content = $('#content');
//     const gifDuration = 15010; 

//     setTimeout(function() {
//       intro.hide();
//       content.show();
//       $('body').css('overflow', 'auto');
//     }, gifDuration);
//   });
