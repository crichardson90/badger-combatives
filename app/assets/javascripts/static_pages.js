// Get the modal
$(document).ready(function() {
  var modal = $('#myModal');
  var modalImg = $('#modalImg');
  var items = $('.item');

  items.on("click", function() {
    modal.fadeIn();
    modalImg.attr("src", this.src);
  });

  window.onclick = function(event) {
    var sameModal = document.getElementById("myModal");

    if (event.target === sameModal) {
      modal.fadeOut();
    }
  }

  $(window).resize(function() {
    if(window.innerWidth > 991) {
      $('nav').removeClass('fixed-top');
      $('#main').removeClass('fixed-top-margin');
    } else {
      $('nav').addClass('fixed-top');
      $('#main').addClass('fixed-top-margin');
    }
  });
})