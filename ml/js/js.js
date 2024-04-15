
$(document).ready(function() {  
    window.addEventListener('resize', Rem, false);
    Rem();
});

function Rem() {
      var docEl = document.documentElement,
        oSize = docEl.clientWidth / 19.2;
      if (oSize > 100) {
        oSize = 100; //  限制rem值   750 / 7.5 =100
      }
      docEl.style.fontSize = oSize + 'px';
}