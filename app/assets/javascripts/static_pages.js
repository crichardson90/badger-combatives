// Get the modal
$(document).ready(function() {
  var modal = $('#myModal');
  var modalImg = $('#modalImg');
  var items = $('.item');

  items.on("click", function() {
    modal.fadeIn();
    modalImg.attr("src", this.src);
  });

  modal.click(function(event) {
    modal.fadeOut();
  })

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