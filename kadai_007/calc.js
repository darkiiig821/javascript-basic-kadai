//変数num（1~100）までのランダムな整数を代入する
let num = Math.floor(Math.random() * 99 +1);

console.log(num);

//変数の値によって出力する文字列を切り替える
if (num % 5 === 0 && num % 3 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 5 === 0 ) {
  console.log('5の倍数です');
}
else if (num % 3 === 0 ) {
  console.log('3の倍数です');
}

else{
  console.log(num);
}