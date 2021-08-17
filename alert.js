// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let maxNum;
let currentNum = 2;
let divNum = 2;
let stringNum ;

maxNum = prompt('Введите число больше 1');
while ( currentNum <= maxNum ){
    if(currentNum % divNum != 0){
      divNum++;
    }
    else{
      if(currentNum == divNum){
        //записываем в с stringNumString(value)
        //stringNum = stringNum + String(currentNum);
        alert(currentNum);
      }
      divNum = 2;
      currentNum++;
    }
}