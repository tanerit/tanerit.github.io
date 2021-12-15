//Based on this code http://stackoverflow.com/questions/21905260/change-all-div-content-on-selecting-option-from-dropdown

$(function () {
  $('.cd-select').show();
  $('.content-panel').hide();
  $('.d1').show();

  $('#selectNav').on("change",function () {
    $('.content-panel').hide();
    $('.d'+$(this).val()).show();
  });
});