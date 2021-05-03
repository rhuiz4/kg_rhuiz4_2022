const convert = require("./main");

function test_convert() {
    /*
    Tests the convert function from main.js
    */
    single_digs = [5,1,2,0,4,0];
    test_single_digs = convert.convert(single_digs);
    console.assert(test_single_digs == "Five,One,Two,Zero,Four,Zero", "Failed Test Single Digits: ", test_single_digs);

    multi_digs = [51,135,61,13,5310,351];
    test_multi_digs = convert.convert(multi_digs);
    console.assert(test_multi_digs == "FiveOne,OneThreeFive,SixOne,OneThree,FiveThreeOneZero,ThreeFiveOne", "Failed Test Multi Digits: ", test_multi_digs);

    test_empty = convert.convert([]);
    console.assert(test_empty == "", "Failed Test Empty: ",test_empty);

    inp1 = [3,25,209];
    test_inp1 = convert.convert(inp1);
    console.assert(test_inp1 == "Three,TwoFive,TwoZeroNine", "Failed Test Input 1 ",test_inp1);

    inp2 = [10,300,5];
    test_inp2 = convert.convert(inp2);
    console.assert(test_inp2 == "OneZero,ThreeZeroZero,Five", "Failed Test Input 2: ",test_inp2);
}

function main(){
    test_convert();
    console.log("All Tests Passed");
}

main();