const ages = [19,22,19,24,20,25,26,24,25,24];
ages.sort();
console.log(ages);
const min_age = ages[0];
console.log(min_age);

const reverse = ages.reverse();
console.log(reverse);

const max_age = ages[0];
console.log(max_age);

// second part 
// to find number of elements in an array(not index )
// index = no.of elements -1;

console.log(ages.length);
const median = (ages.length/2) + (ages.length+1/2);
console.log(median);



// // third part 
// for(let index = 0; index<ages.length; index++){
    
//    const elements  = ages[index];
// //    console.log(elements);

//    let sum = 0;
//    sum = sum+elements;
//    let x = ages.length;
//    const average = sum/x
//    console.log(average);

// }

// part 4 range (max-min)

let range = max_age - min_age;
console.log(range);

// 