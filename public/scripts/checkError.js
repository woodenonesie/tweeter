//checks if tweets are not empty or longer than 140 characters and
//changes an error message
const checkError = function(data) {
  let errorMessage = "";
  //error message is always sliding up
  $("#error").slideUp("fast", () => {
    if (data.slice(5).length === 0 || data === null) {
      errorMessage = "⚠️Your tweet is empty💀";
    } else if (data.slice(5).length > 139) {
      errorMessage = "⚠️Your tweet is too long💀";
    }
    //if we have error message, banner is sliding down
    if (errorMessage) {
      $("#error").slideDown("fast");
      $("#error").first().text(errorMessage);
    }
  });
};