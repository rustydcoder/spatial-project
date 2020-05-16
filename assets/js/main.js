$(document).ready(() => {
   $count = 0;
   $('.burgers').on('click', () => {
      if($count == 0) {
         $('#nav').css({'left': '0%'});
         $('#topnav').css({'left': '0%'});
         $('.burgers').addClass('toggle');
         $count = 1;
      } else {
         $('#nav').css({'left': '-50%'});
         $('#topnav').css({'left': '-50%'});
         $('.burgers').removeClass('toggle');
         $count = 0;
      }
   })
})