const PHONETICS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var ARGS = process.argv;

function convert(array){
    /*
    Converts an integer array into its phonetic representation
    Params: Array<int> of integer values
    Return: String with the phonetic string of the integers in the array
    */
    let result = []
    for (let i = 0; i < array.length; i++){
        let curr_num = array[i];
        if (curr_num == 0){
            result.push("Zero");
        }
        else {
            let curr_str = "";
            while (curr_num) {
                curr_dig = curr_num%10;
                curr_num = Math.floor(curr_num/10);
                curr_str = (PHONETICS[curr_dig]) + curr_str;
            }
            result.push(curr_str);
        }
    }
    return result.join(",");
}

function main(){
    console.log(convert(ARGS.slice(2)))
}
main();

module.exports = { convert };   // For the test file