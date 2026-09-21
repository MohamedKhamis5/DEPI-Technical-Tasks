// 1

// function add (a,b){
//     if (arguments.length!=2){
//         throw ("arguments must be to")
//     }
//     return a+b
// }
// console.log(add(1,2))
// add(1,3,3,4)

// 2

// function sum(){
//     subm=0
//     for (var i=0 ; i<arguments.length ;i++){
//         if (typeof arguments[i] !=="number"){
//             throw("must be numbers")
//         }
//         subm+=arguments[i]
//     }
//     console.log(subm);
// }
// sum(1,2,3,2,1,4,4,4)

// 3

// function rev(){
//     var li=[]
//     for (var i=0 ; i<arguments.length ;i++){
//         if (typeof arguments[i] !=="number"){
//             throw("must be numbers")
//         }
//         li.push(arguments[i]);       
//     } 
//     li.splice(2,0,5)
//      return li.reverse()
// }
// console.log(rev(1,2,3,4));

// 4

// do{
//     date=prompt("Enter the date like DD-MM-YYYY :")
// }
// while(date.length!==10||date[2]!=="-"||date[5]!=="-");
// function ret (date){
//    var day=Number(date.slice(0,2))
//    var mon=Number(date.slice(3,5))
//    var ye=Number(date.slice(6,10))
//    var full=new Date(ye,mon-1,day)
//     console.log(full);
// }
// ret(date)

// 5

// function getDayName(dat) {
//     var date = new Date(dat);
//     var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     return days[date.getDay()];
// }
// console.log(getDayName("2026-09-05"));