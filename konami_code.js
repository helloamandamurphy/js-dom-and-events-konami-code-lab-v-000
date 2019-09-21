const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  //start index at first number
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    // parses through the entered key, and saves it as an
    // integer to the variable key
    const key = parseInt(e.which || e.detail);
    // if the key integer is equal to the first number in
    // the code array, the index is incremented up, and
    // the key is compared to the next element of the code array.
    if (code[index] === key) {
      index++;
      // if the index is equal to the code length (the entered keys
      // have matched the whole code array, and the code has been entered
      // correctly. )
      if (index === code.length) {
        alert("Hurray!");
      // resets the index to zero
        index = 0;
      }
    }
    else {
      // if the entered key is not correct, index resets to 0.
      index = 0;
    }
  });
}

//this is a bit difficult to comprehend at the moment--revisit/supplement info on events in the future.

init();
