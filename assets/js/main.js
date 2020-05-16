(() => {

   const dOm = {
      burger: document.getElementsByClassName('burgers')[0],
      nav: document.getElementById('nav'),
      topNav: document.getElementById('topnav'),
   }


   let flag = false;
   function navBar({ burger, nav, topNav }) {

      let availableNav = nav || topNav
      if (!flag) {
         burger.classList.add('toggle')
         availableNav.style.left = '0%'
         flag = true
      } else {
         burger.classList.remove('toggle')
         availableNav.style.left = '-50%'
         flag = false
      }
   }
   dOm.burger.addEventListener('click', () => { navBar(dOm) })


   // function testForNav(x, y) {
   //    return x ? x : y
   // }
})()