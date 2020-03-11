function get_pass_or_failure(subject_points){
   // 変数「number」に入力した教科の数を代入します。
   let number = subject_points
   // 変数「judge」に"合格"を代入しておきます。
   let judge = "合格";
for(let i=0; i<number; i++){
  if(number[i]<60){
    judge= "不合格";
    break;
    }
}
  return judge;
}
console.log(subject_points);
let subject_points = [50,50,50,50,];
// 入力したそれぞれの教科の点数が60点よりも低いと変数「judge」に"不合格"を代入して「judge」を返します。
 //   // ヒント! 「javascript 点数 合格 不合格 ロジック」で検索してみてください。
 //   $("#judge").text(get_pass_or_failure(subuject_points));
 // };
