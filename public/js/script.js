$("#show").click(function () {
  $(this).hasClass("bxs-show")
    ? $(this).toggleClass("bxs-show bxs-hide") &&
      $("#password").attr("type", "text")
    : $(this).toggleClass("bxs-hide bxs-show") &&
      $("#password").attr("type", "password");
});
