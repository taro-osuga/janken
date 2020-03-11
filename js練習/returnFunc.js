function divide(i, j) {
  if (j === 0) {
    return "error";
  } else {
    return i / j;
  }
}
function showResult(i, j, computeFunc) {
  let result = computeFunc(i, j); // computeFunc関数の結果をresult変数に入れる
  if (result === "error") { // 結果が文字列だったらそのまま出力(割り切れない場合のため)
    return result;
  } else { // 割り切れている場合はresultに100をかける
    return `${result * 100}パーセントです`;
  }
}
console.log(showResult(2, 4, divide)); // 50パーセントです

function add(a,b){
  let sum = a + b;
  if (sum < 50){
    return "50より小さいです";
  } else {
    return "50以上です"
  }
}
console.log(add(10,20));
