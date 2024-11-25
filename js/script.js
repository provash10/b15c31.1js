// 

// =====================================

// let marks = [45, 67, 89, 67, 99, 54];

// let number =  80;
// 

// ============
let marks = [45, 67, 89, 67, 99, 54, 65, 54];

for(let i=0; i<=5; i++){

// if (marks [i]>=80){
//         console.log("A+");
// }

if (marks[i]>=80){
    console.log(marks[i]  + "= A+");
}
else if (marks [i]>=70){
    console.log("A");
}

else if (marks [i]>=60){
    console.log("A-");
}
else if (marks [i]>=50){
    console.log("B");
}
else if (marks [i]>=40){
    console.log("C");
}
else if (marks [i]>=33){
    console.log("D");
}

else{
    console.log("Failed");
}
}


// =================

