var phonetics = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
var result = []


function convert(array){
    result = []
    for (let i = 0; i < array.length; i++){
        let curr_num = array[i]
        if (curr_num == 0){
            result.push("Zero")
        }
        else {
            let curr_str = ""
            while (curr_num) {
                curr_dig = curr_num%10
                curr_num = Math.floor(curr_num/10)
                curr_str = (phonetics[curr_dig]) + curr_str
            }
            result.push(curr_str)
        }
    }
}

let a = [314,143215425,5135209,51531]
convert(a)

console.log(result.join(","))