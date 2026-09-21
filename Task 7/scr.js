// 1
// var str=prompt("enter string : ")
// String(str)
// var cas=prompt("do you want consider case? (y,n)")
// if(cas==="n"){
//    str=str.toLowerCase()
// }
// var neew =""
// for (i = str.length - 1; i >= 0; i--) {
//   neew+=str[i];
// }
// if (str===neew){
//     console.log("it`s palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

// 2
// var stri=prompt("enter str : ")
// var count=0
// for(var i=0;i<stri.length;i++){
//     if (stri[i]=='e'){
//         count+=1
//     }
// }
// console.log(count);

// 3
// var namee =new RegExp(/^[A-Za-z ]+$/);
// var phone=new RegExp(/^\d{8}$/);
// var mobile=new RegExp(/^(010|011|012)\d{8}$/);
// var mail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/);
// var userName = prompt("Enter your name:");
// var userPhone = prompt("Enter your phone number:");
// var userMobile = prompt("Enter your mobile number:");
// var userMail = prompt("Enter your email:");
// if(namee.test(userName)&&phone.test(userPhone)&&mobile.test(userMobile)&&mail.test(userMail)){
//     alert(`Hello ${userName}
//     your phone number is ${userPhone}
//     your mobile number is ${userMobile}
//     your email is ${userMail}`)
// }
// else{
//     console.log("invalid info");
    
// }

// 4
// var radius=parseFloat(prompt("enter radius : "));
// alert(Math.PI * radius ** 2)

// 5
// var number=parseInt(prompt("enter number : "));
// alert(`square root of ${number} is ${Math.sqrt(number)}`)

// 6
// var arr = [];
// arr[0] = parseFloat(prompt("enter first number : "  ));
// arr[1] = parseFloat(prompt("enter second number : "));
// arr[2] = parseFloat(prompt("enter third number : "));
// var sum = arr[0] + arr[1] + arr[2];
// var mult = arr[0] * arr[1] * arr[2];
// var div = arr[0] / arr[1] / arr[2];
// alert(`
//     sum = ${sum}
//     multiply = ${mult}
//     division = ${div}`);

// 7
// var arr=[]
// arr[0] = parseFloat(prompt("enter first number : "  ));
// arr[1] = parseFloat(prompt("enter second number : "));
// arr[2] = parseFloat(prompt("enter third number : "));
// arr[3] = parseFloat(prompt("enter fourth number : "  ));
// arr[4] = parseFloat(prompt("enter fifth number : "));
// console.log("you have entered values "+arr);
// console.log("asc "+arr.sort((a, b) => a - b));
// console.log("disc "+arr.sort((a, b) => a - b).reverse());
// I ask AI in this q7 because sort sort first digit only as string so i invistigate and do it


