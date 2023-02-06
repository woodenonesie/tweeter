// print the appropriate error message on the front-end side
const handleServerError = function (jqXHR, textStatus, errorThrown) {
  const errorMessage = `${textStatus}: ${jqXHR.status} ${errorThrown}`;
  $("#error").slideUp("fast", () => {
    //if we have error message, banner is sliding down
    if (errorMessage) {
      $("#error").slideDown("fast");
      $("#error").first().text(errorMessage);
    }
  })
}