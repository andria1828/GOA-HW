countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Go!")



user_input = ""
while user_input.lower() not in ['yes', 'no']:
    user_input = input("Do you want to continue? (yes/no): ")
print("Thank you for your response!")



n = 10
total = 0
i = 1
while i <= n:
    if i % 2 == 0:
        total += i
    i += 1
print("Sum of even numbers from 1 to", n, "is", total)



password = "secret"
user_password = ""
while user_password != password:
    user_password = input("Enter the password: ")
print("Access granted!")


limit = 50
a, b = 0, 1
fibonacci_sequence = []
while a < limit:
    fibonacci_sequence.append(a)
    a, b = b, a + b
print("Fibonacci sequence up to", limit, ":", fibonacci_sequence)



numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)




    word = "Python"
for letter in word:
    print(letter)



for i in range(5):
    print(i)



for x in range(2, 35, 3):
  print(x)


  for x in range(6):
    print(x)
else:
  print("Finally finished!")




  a = 22
b = 400
if b > a:
  print("b მეტია ვიდრე a")


  a = 22
b = 22
if b > a:
  print("b მეტია ვიდრე a")
elif a == b:
  print("a და b ტოლია")



  a = 200
b = 33
if b > a:
  print("b მეტია ვიდრე a")
elif a == b:
  print("a და b ტოლია")
else:
  print("a მეტია ვიდრე b")




  a = 4
b = 240
print("A") if a > b else print("B")



a = 500
b = 66
c = 700
if a > b and c > a:
  print("ორივე პირობა მართალია")