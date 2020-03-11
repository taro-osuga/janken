def count_letter(str)
  count = 0
  str.split("").each do
    count +=1
  end
  count
end
# 省略
p count_letter("アイウエオかきくけこ")
