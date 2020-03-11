class Player
  def hand
    puts "数字を入力してください。"
    puts "0:グー\n1:チョキ\n2:パー"
    input_hand = gets.to_i
    while true
      if input_hand == 0 || input_hand == 1 || input_hand == 2

        return input_hand
      else
        puts "もう一度数字を入力してください。"
        puts "0:グー\n1:チョキ\n2:パー"
        input_hand = gets.to_i
      end
    end
  end
end

class Enemy
  def hand
    enemy_hand = rand(3)
  end
end

class Janken
  def pon(input_hand, enemy_hand)
    janken = ["グー", "チョキ", "パー"]
    #puts "相手の手は#{janken[enemy_hand]}です。"
    a = input_hand
    b = enemy_hand
    if (a - b + 3)% 3 == 0
       puts "相手の手は#{janken[enemy_hand]}です。あいこ。"
      return true
    elsif (a - b + 3)% 3 == 2
    puts "相手の手は#{janken[enemy_hand]}です。あなたの勝ちです。"
      return false
    else
    puts "相手の手は#{janken[enemy_hand]}です。あなたの負けです。"
      return false
    end
   end
end

player = Player.new
enemy = Enemy.new
janken = Janken.new
next_game = true

while next_game do
  next_game = janken.pon(player.hand, enemy.hand)
end
# janken
