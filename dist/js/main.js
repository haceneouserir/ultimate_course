$(function() {
  'use strict';
  $('.toggle-sidebar').on('click', function() {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  })
  // Toggle submenu
  $('.toggle-submenu').on('click', function() {
    $(this).find('.fa-angle-right').toggleClass('down');
    $(this)
      .next('.child-links')
      .slideToggle();
  });
  // Open / close fullscreen
  $('.toggle-fullscreen').on('click', function() {
    $(this).toggleClass('full-screen');
    if ($(this).hasClass('full-screen')) { // Page is now full screen
      openFullscreen();
    } else { // Page is not full screen
      closeFullscreen();
    }
  });
  // Toggle settings bar
  $('.toggle-settings').on('click', function() {
    $(this).find('i').toggleClass('fa-spin');
    $(this).parent().toggleClass('hide-settings');
  });

  // Switch colors themes
  var themesClasses = [];
  $('.color-options li').each(function() {
    themesClasses.push($(this).data('theme'))
  });
  $('.color-options li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('body').removeClass(themesClasses.join(' ')).addClass($(this).data('theme'));
  });
  // Switch font options
  var fontsClasses = [];
  $('.font-options select option').each(function() {
    fontsClasses.push($(this).val())
  });
  $('.font-options select').on('change', function() {
    $('body').removeClass(fontsClasses.join(' ')).addClass($(this).find('option:selected').val());
  });
});

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}