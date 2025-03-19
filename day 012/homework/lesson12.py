

for i in range(21):
    print(i) 


num = int (input ("Enter any number to test whether it is odd or even: "))

if (num % 2) == 0:
     print ("The number is even")

else:
    print ("The provided number is odd")

sum = 0



for i in range(10):
    sum = sum + 2


    print(sum)


total_sum = 0


for num in range(50, 101):

    total_sum += num


print("The sum of numbers from 50 to 100 :", total_sum)



for num in range(1, 51):

    if num % 5 == 0:
        print(num)


num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))


smallest = min(num1, num2)
largest = max(num1, num2)

print("Numbers from smallest to largest:")
for num in range(smallest, largest + 1):
    print(num)


word = input("Enter a word: ")


print("Word in the opposite direction:")
for i in range(len(word) - 1, -1, -1):
    print(word[i], end="")


num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

sum = num1 + num2

print("The sum of", num1, "and", num2, "is", sum)



product = 1

for num in range(5, 11):
    product *= num

print("The product of numbers from 5 to 10 inclusive is:", product)