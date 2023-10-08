let marks = [ 33, 34, 35, 36, 37, 'failed']
console.log(marks);
console.log(marks [0] ); //[array te ....index start hoi 0 theke ...// like-- 0 1 2 3 4 5]
console.log(marks [1] );
console.log(marks [2] );
console.log(marks [3] );
console.log(marks [4] );
console.log(marks [5] );
/*
to array er syntax 
    var name = [ obj , obj, obj];
*/

let new_marks = [12, 34, 35, 78, 34, 57, 'failed'];
console.log(new_marks);
    console.log('the value of 5th new_marks is-', new_marks [4]);  //[ki jeno likhte gecilam khaye felci]
// to moreover array, 1 te value er under a onk gula object k rakha jai

// to jodi mui array er value change korte cai than -->
new_marks[6]= 'passed'  //note {value to change hobe but old data config a old data pass korbe}
console.log(new_marks); // -- new data pass er por new data execute hobe {{}}
console.log(new_marks[6]); //example

/* to array new data overwright syntax-
    array_name = new data ;
*/



let roll = [12, 13, 14, 15, 16];
console.log(roll);
roll.push('new data'); // array te new data add korte hoile push 
console.log(roll);

/*
to array te push korar syntax -->
    array_name.push(value); {{done}}
*/
let poproll = [14, 15, 16, 17, 18];
console.log('old', poproll);
poproll.pop(); //(self close) !!!-> pop used for remove the last value
console.log('new', poproll);

/* to array pop ar syntax -->
    array_name.pop();
*/
let shiftroll = [14, 15, 16, 17, 18];
console.log('old', shiftroll);

shiftroll.shift(); //(self close)  ! --> shift used for remove the first value
console.log('new', shiftroll);

/* to array shift ar syntax -->
    array_name.shift();
*/

let unshiftroll = [14, 15, 16, 17, 18];
console.log('old', unshiftroll);

unshiftroll.unshift('neta');   // unshift used for add new value to the start 
console.log('new', unshiftroll);

/* to array unshift ar syntax -->
    array.unshift(item1, item2, ..., itemX)
*/



let spliceroll = [14, 15, 'remove', 17, 18];
console.log('old', spliceroll);

spliceroll.splice(2, 1);
console.log('new', spliceroll); // splice index ar thike kicu remove kore // note (index, koita delete) kormu specify korte hoi 

/* to array splice ar syntax -->
    array.splice(startindex {konta targate kormu}, deletecount{koita re target kormu});
*/

let spliceaddroll = [14, 15, 'remove', 17, 18];
console.log(spliceaddroll);

spliceaddroll.splice(2, 1, 'add');
console.log(spliceaddroll);