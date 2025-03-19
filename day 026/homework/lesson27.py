#1

for i in range(1,6):
    print(i)

#2

num = 1
while num <= 5:
    print(num)
    num += 1

#3

x = "hello"
for o in x:
    print(o)

#4

string = "hello"

index = 0


while index < len(string):
    print(string[index])
    index += 1

#5

for num in range(1, 4):
    print(num)

#6


num = 1
while num <= 3:
    num += 1

#7

message = "Python is fun"

for i in range(3):
    print(message)

#8

message = "Python is fun"

count = 0

while count < 3:
    print(message)
    count += 1

#9

my_list = [1, 2, 3]

for i in my_list:
    print(i)

#10

my_list = [1, 2, 3]

index = 0


while index < len(my_list):
    print(my_list[index])
    index += 1

#11

my_list = [1, 2, 3]

for i in my_list:
    print("hi")

#12

my_list = [1, 2, 3]

index = 0

while index < len(my_list):
    print("hi")
    index += 1

#13

for x in range(1, 4):
    print(x)

#14

num = 1

while num <= 3:
    print(num)
    num += 1

#15

for v in range(3, 0, -1):
    print(v)

#16

num = 3

while num >= 1:
    print(num)
    num -= 1

#17

letters = ['a', 'b', 'c', 'd']


for letter in letters:
    print(letter)

#18

letters = ['a', 'b', 'c', 'd']

index = 0

while index < len(letters):
    print(letters[index])
    index += 1

#19

for i in range(4):
    print("looping")

#20

count = 0

while count < 4:
    print("looping")
    count += 1

#21

my_tuple = (1, 2, 3)

for a in my_tuple:
    print(a)

#22

my_tuple = (1, 2, 3)

index = 0

while index < len(my_tuple):
    print(my_tuple[index])
    index += 1

#23

for c in range(5, 0, -1):
    print(c)

#24

num = 5

while num >= 1:
    print(num)
    num -= 1

#25


fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

#26

fruits = ["apple", "banana", "cherry"]

index = 0

while index < len(fruits):
    print(fruits[index])
    index += 1

#27

for i in range(3):
    print(i)

#28

num = 0

while num < 3:
    print(num)
    num += 1

#29

numbers = [1, 2, 3, 4]

for num in numbers:
    print("loop")

#30

numbers = [1, 2, 3, 4]

index = 0

while index < len(numbers):
    print("loop")
    index += 1

#31

string = "abc"

for char in string:
    print(char)

#32

string = "abc"
index = 0

while index < len(string):
    print(string[index])
    index += 1

#33

my_list = ["x", "y", "z"]

for element in my_list[:2]:  
    print(element)

#34

my_list = ["x", "y", "z"]
index = 0

while index < 2:
    print(my_list[index])
    index += 1

#35

for _ in range(2):
    print("Hello World")

#36

count = 0

while count < 2:
    print("Hello World")
    count += 1

#37

my_set = {1, 2, 3}

for element in my_set:
    print(element)

#38

my_set = {1, 2, 3}
my_list = list(my_set) 

index = 0
while index < len(my_list):
    print(my_list[index])
    index += 1

#39

my_dict = {"a": 1, "b": 2}

for key in my_dict:
    print(key, "->", my_dict[key])

#40

my_dict = {"a": 1, "b": 2}
keys = list(my_dict.keys())  

index = 0
while index < len(keys):
    key = keys[index]
    value = my_dict[key]
    print(key, "->", value)
    index += 1

#41

numbers = [10, 20, 30]

for num in numbers:
    print(num)

#42

numbers = [10, 20, 30]
index = 0

while index < len(numbers):
    print(numbers[index])
    index += 1

#43

for i in range(5):  
    print(i)

print("Done")

#44

for i in range(5):  
    print(i)

print("Done")

#45

nested_list = [[1, 2], [3, 4]]

for sublist in nested_list:
    for element in sublist:
        print(element)

#46

nested_list = [[1, 2], [3, 4]]
outer_index = 0

while outer_index < len(nested_list):
    inner_index = 0
    while inner_index < len(nested_list[outer_index]):
        print(nested_list[outer_index][inner_index])
        inner_index += 1
    outer_index += 1

#47

for num in range(1, 6):
    print(num)

#48

num = 1
count = 0

while count < 5:
    print(num)
    num += 1
    count += 1

#49

string = "loop"

for char in string:
    print(char)

#50
string = "loop"
index = 0

while index < len(string):
    print(string[index])
    index += 1
