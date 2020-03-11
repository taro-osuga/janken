def puts_hoge(number)
  number.each do |g|
    if g % 3 == 0 ||  g.to_s.include?("3")
      puts "Hoge"
    else
      puts "#{g}"
    end
  end
end
puts_hoge(1..40)
