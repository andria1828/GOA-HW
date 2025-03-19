age = int(input("Enter your age: "))

    
if age >= 0 and age < 13:
    print("You are a child.")
elif age >= 13 and age < 18:
    print("You are a teenager.")
else:
    print("You are an adult.")

#classwork (N2)


favorite_Movies=["Pirates_of the Caribbean", "home alone", "rush hour" ]
favorite_musics=["არ მაქვს გამორჩეული მუსიკა", " მუსიკა1", "მუსიკა2"]
United= favorite_Movies + favorite_musics

print(United[len](United) -1 )
print(favorite_Movies[3])
print(favorite_musics[2])
#სია მონაცემთა სტრუქტურა პითონში, რომელიც არის ელემენტების ცვალებადი, ან ცვალებადი, მოწესრიგებული თანმიმდევრობა
#ინდექსი აბრუნებს ელემენტის პოზიციას მითითებულ სიაში ან სიმბოლოებს სტრიქონში
#ლენ ფუნქციის დახვამრებით ვიგებთ რამდენი მონაცემია სიაში