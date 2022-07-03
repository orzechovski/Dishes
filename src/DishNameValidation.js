export default function dishValidation(dish) {
  const errors = [];

  //check if our input isnt empty
  if (dish === "" || dish === null) {
    errors.push("Your dish name is empty");
  } else {
    //check length of input
    if (dish.length < 3) {
      errors.push("Your dish must contain at least 3 characters");
    } else {
      for (const char of dish) {
        //check for spaces
        if (char === " ") {
          errors.push("You cant have spaces in your dish name");
        } else {
          const letters = []; // here is an alphabet
          for (let i = 0; i < 26; i++) {
            letters.push((i + 10).toString(36));
          }
          //checks if in input are only letters
          if (!letters.includes(char.toLowerCase())) {
            errors.push("Your dish can only contain letters");
          }
        }
      }
    }
  }
  return errors;
}
