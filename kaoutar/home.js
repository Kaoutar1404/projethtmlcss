  document.addEventListener('DOMContentLoaded', function () {
          const lipstickItems = document.querySelectorAll('.lipstick-item');

          function showLipsticks() {
            lipstickItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, index * 300); 
            });
          }

          showLipsticks();
  });




  