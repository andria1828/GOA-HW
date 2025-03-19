def find_short(s):
    # "s.split(' ')" მაცემის სტრიქონს სიტყვების სიაში გაწვდავს, სადაც ყოველი სიტყვა ერთობლივ ელემენტად ჩაწერილია
    list1 = s.split(" ")
    
    # ვმონაწილეობთ პირველ სიტყვას სიაში და ვპოულობთ მისი სიგრძეს
    word_len = len(list1[0])
    
    # ვათვალიერებთ თითოეულ სიტყვას სიაში
    for i in list1:
        # თუ ამ სიტყვის სიგრძე ნაკლებია იმ სიტყვაზე, რომლის სიგრძე უკვე შევინახეთ (word_len)
        if len(i) < word_len:
            # განახლდება word_len ამ სიტყვის სიგრძით
            word_len = len(i)
    
    # აქ ვბრუნებთ ყველაზე მოკლე სიტყვის სიგრძეს
    return word_len

# ვტესტირებთ ფუნქციას მოცემული სტრიქონით
print(find_short("bitcoin take over the world maybe who knows perhaps"))




string1 = "Hello world this is Python"
split1 = string1.split(" ")
print(split1)

string2 = "apple,orange,banana,grape"
split2 = string2.split(",")
print(split2)

string3 = "one.two.three.four"
split3 = string3.split(".")
print(split3)

string4 = "home/user/documents/file"
split4 = string4.split("/")
print(split4)

string5 = "2024-07-28"
split5 = string5.split("-")
print(split5)

string6 = "user@example.com"
split6 = string6.split("@")
print(split6)

string7 = "key:value"
split7 = string7.split(":")
print(split7)

string8 = "item(1)(2)(3)"
split8 = string8.split("(")
print(split8)

string9 = "data[0][1][2]"
split9 = string9.split("[")
print(split9)

string10 = "one'two'three"
split10 = string10.split("'")
print(split10)