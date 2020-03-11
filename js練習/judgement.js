function get_achievement(x,y,z){
  let sum = x + y + z;
  if(sum >= 250){
    return "A";
  }
  else if (sum >= 200) {
    return "B";
  }
  else if (sum >= 100) {
    return "C";
  }
  else {
    return "D";
  }
}
//console.log(get_achievement(100,1000,50));

function get_pass_or_failure(x,y,z){
  if ( x < 60 &&　z < 60 && y < 60) {
    return "不合格です。残念！";
  }
  else if ( x < 60){
    return "国語が60点未満なので不合格です。残念！";
  }
  else if ( y < 60) {
    return "算数が60点未満なので不合格です。残念！";
  }
  else if ( z < 60) {
    return "理科が60点未満なので不合格です。残念！";
  }
  else {
    return "合格です!";
  }
}
//console.log(get_pass_or_failure(60,60,60));

function judgement(x,y,z){
  let achievement = get_achievement(x,y,z)
  let pass_or_failure = get_pass_or_failure(x,y,z)
  return `あなたの成績は${achievement}です。${pass_or_failure}`;
}
console.log(judgement(90,90,90));
