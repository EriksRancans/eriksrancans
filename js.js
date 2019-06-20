function openNav() {

    document.getElementById("burger").style.display = "none";
    document.getElementById("fab").style.display = "none";
    if (window.matchMedia("(max-width: 400px)").matches) {
        document.getElementById("sidenav").style.width = "100%";

    } else {
        document.getElementById("sidenav").style.width = "100%"; 
    }
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("burger").style.display = "block";
    document.getElementById("fab").style.display = "block";
}

AOS.init();

/* Tetxt area expand */
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

/* Scroll down button */
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  Vue.use(VueSmoothScroll)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    };
    window.addEventListener('scroll', f)
  }
});

const app = new Vue({
  el: '#app',
  data: {
    visible: false 
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > 150;
    }
  }
});

const scroll = new Vue({
    el: '#scroll',
    data: {
      visible: false 
    },
    methods: {
      handleScroll() {
        this.visible = window.pageYOffset > 150;
      }
    }
  });
