def Calculate_average(numbers):
    if not numbers:
        print("List is empty. Cannot calculate average.")
        return
    
    avg = sum(numbers) / len(numbers)
    print("The average of the numbers is: " + str(avg))


numbers = [10, 20, 30, 40, 50]
Calculate_average(numbers)  

empty_list = []
Calculate_average(empty_list)  




def manual_sum(num_list):
    total_sum = 0
    for num in num_list:
        total_sum += num
    return total_sum


numbers = [10, 20, 30, 40, 50]
print("Sum of numbers:", manual_sum(numbers))  


other_numbers = [5, 7, 2, 10]
print("Sum of numbers:", manual_sum(other_numbers))  


empty_list = []
print("Sum of numbers:", manual_sum(empty_list))  

def greet(name='guest'):
    greeting = 'hello '
    print(greeting + name)


greet('andria')


greet()



def find_sum(firstnum, secondnum):
    sum_result = firstnum + secondnum
    return sum_result

first_number = int(input("შეიყვანეთ პირველი რიცხვი: "))
second_number = int(input("შეიყვანეთ მეორე რიცხვი: "))
result = find_sum(first_number, second_number)
print(result)




def classify_numbers(numbers):
    odd_numbers = []
    even_numbers = []

    for num in numbers:
        if isinstance(num, int):
            if num % 2 == 0:
                even_numbers.append(num)
            else:
                odd_numbers.append(num)

    return odd_numbers, even_numbers

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_nums, even_nums = classify_numbers(numbers)

print("კენტი რიცხვები:", odd_nums)
print("ლუწი რიცხვები:", even_nums)




def print_numbers(n):
    for i in range(1, n + 1):
        print(i)

n = int(input("შეიყვანეთ n მნიშვნელობა: "))
print_numbers(n)


def print_even_numbers(n):
    for num in range(2, n + 1, 2):
        print(num)

n = int(input("შეიყვანეთ n მნიშვნელობა: "))
print("2-დან n-მდე ყველა ლუწ რიცხვი:")
print_even_numbers(n)



def print_sum(num1, num2):
    total = num1 + num2
    print("{0} და {1}-ს ჯამი არის: {2}".format(num1, num2, total))

number1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
number2 = int(input("შეიყვანეთ მეორე რიცხვი: "))
print_sum(number1, number2)




def joined_string(str1, str2):
    joined = str1 + " და " + str2
    print(joined)

string1 = input("შეიყვანეთ პირველი სტრინგი: ")
string2 = input("შეიყვანეთ მეორე სტრინგი: ")
joined_string(string1, string2)



def find_maximum(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

number1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
number2 = int(input("შეიყვანეთ მეორე რიცხვი: "))
result = find_maximum(number1, number2)
print(f"მაქსიმალური რიცხვი არის: {result}")



def reverse_string(s):
    return s[::-1]

input_string = input("შეიყვანეთ ტექსტი: ")
reversed_string = reverse_string(input_string)
print(f"შებრუნებული ტექსტი: {reversed_string}")



def rectangle_area(length, width):
    area = length * width
    return area

length = float(input("შეიყვანეთ მართკუთხედის სიგრძე: "))
width = float(input("შეიყვანეთ მართკუთხედის სიგანე: "))
area = rectangle_area(length, width)
print(f"მართკუთხედის ფართობი არის: {area}")

def is_prime(number):
    if number <= 1:
        return False

    if number <= 3:
        return True
    
    if number % 2 == 0 or number % 3 == 0:
        return False

    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    
    return True

number = 29
if is_prime(number):
    print(f"{number} არის მარტივი რიცხვი")
else:
    print(f"{number} არ არის მარტივი რიცხვი")




def sum_of_numbers(numbers):
    total_sum = sum(numbers)
    return total_sum

numbers = [1, 2, 3, 4, 5]
result = sum_of_numbers(numbers)
print(f"რიცხვების ჯამი: {result}")  








def count_vowels(string):

    vowels = "aeiouAEIOU" 






def capitalize_strings(strings):
    capitalized_strings = [s.upper() for s in strings]
    return capitalized_strings


strings = ["apple", "banana", "cherry", "date"]
result = capitalize_strings(strings)
print(result)  