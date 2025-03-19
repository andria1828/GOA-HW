fruits = ["apple", "banana", "mango"]
print(fruits)


fruits = ["apple", "banana", "mango"]
print(len(fruits))


list1 = ["apple", "mango", "blueberry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

list4 = ["one", 23, True, 2, "male"]

mylist = ["apple", "banana", "cherry"]
print(type(mylist))


thislist = list(("apple", "banana", "cherry")) 
print(thislist)

#დავალება 1
# შექმენით სია, სადაც შეიყვანთ თქვენი ოჯახის წევრების სახელებს
family_members = ["გიორგი", "ავთო", "მიქაელი", "ანდრია", "ნანა"]

# indexing-ის გამოყენებით დაბეჭდეთ ყველას სახელი ცალ-ცალკე
for i in range(len(family_members)):
    print(family_members[i])
#    დავალება 2

# შექმენით სია, სადაც გექნებათ 1-დან 10-ის ჩათვლით რიცხვები
numbers = list(range(1, 11))

# პირველი ელემენტი
print("სიის პირველი ელემენტი:", numbers[0])

# ბოლო ელემენტი
print("სიის ბოლო ელემენტი:", numbers[-1])

# დავალება 3
# შექმენით სია, სადაც გექნებათ 10-დან 20-ის ჩათვლით რიცხვები
numbers = list(range(10, 21))

# ლუწ ინდექსებზე მყოფი ელემენტების შეცვლა 1-ით
for i in range(0, len(numbers), 2):
    numbers[i] = 1

# სიას დაბეჭდეთ
print(numbers)
#დავალება 4

# შეინახეთ მონაცემები ცვლადებში
first_name = "ანდრია"
last_name = "კობახიძე"
age = 13
location = "თბილისი"
email = "ანდრია@გმაილ.com"

# შექმენით სია და დაბეჭდეთ ინფორმაცია
user_info = [first_name, last_name, age, location, email]
print(user_info)
#დავალება 5 

# შეინახეთ გვარი ცვლადში
last_name = "კობახიძე"

# გამოიყენეთ indexing და დაბეჭდეთ თითოეული ასო
for index in range(len(last_name)):
    print(last_name[index])