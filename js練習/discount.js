const userage = 26;
const hasStudentCard = false; // 定数にfalseを代入
const miniage = 3;
const maxage = 25;
if (hasStudentCard === true) { // もし学生証を持って入れば
  console.log("学割適用"); // コンソールに"学割適用"が出力
}
else if (userage >= miniage&& userage <= maxage)
{ // 学生証を持っていなくても年齢が条件にあって入れば...
  console.log("学割適用");}
else{ // 条件に合わない場合
  console.log("条件に合わないので割引できません");}
