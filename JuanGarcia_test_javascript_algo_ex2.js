
function verify_numbers(numbers) {

    for (number in numbers) {
        if (numbers[number].length == 1 && numbers[number] !== "0") { //Check if the length is not more than one and if is not 0
            if (numbers.indexOf(numbers[number]) !== numbers.lastIndexOf(numbers[number])) { //Check for repetition;
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

}
