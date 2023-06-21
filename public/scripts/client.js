$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const charCount = $(this).val().length;
    const counter = $(this).siblings('div').children('.counter');
    counter.text(140 - charCount);
    if (charCount > 140) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }
  });
});
