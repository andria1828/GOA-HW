#join ფუნქცია


# სექვენცია (ლისტი) სტრინგებისაგან
words = ["hello", "world", "python"]

# `join` ფუნქცია უყრის სტრინგებს ერთად, " " (სრული თეთრი ადგილის სიმბოლო) რომ გაწერდოს ელემენტებს შორის
result = " ".join(words)

# შედეგი: "hello world python"
print(result)


#replace ფუნქცია


# საწყისი სტრინგი
text = "hello world, hello python"

# `replace` ფუნქცია ცვლის ყველა "hello"-ს "hi"-თი
new_text = text.replace("hello", "hi")

# შედეგი: "hi world, hi python"
print(new_text)
