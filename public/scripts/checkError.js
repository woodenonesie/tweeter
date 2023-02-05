//checks if tweets are not empty or longer than 140 characters and
//changes an error message. Returns true if error occurs
const checkError = function(data) {
  let errorMessage = "";
  if (data.length === 0 || data === null) {
    errorMessage = "⚠️Your tweet is empty💀";
  } else if (data.length > 140) {
    errorMessage = "⚠️Your tweet is too long💀";
  }
  //error message is always sliding up
  $("#error").slideUp("fast", () => {
    //if we have error message, banner is sliding down
    if (errorMessage) {
      $("#error").slideDown("fast");
      $("#error").first().text(errorMessage);
    }
  });
  if (errorMessage) {
    return true;
  }
  return false;
};