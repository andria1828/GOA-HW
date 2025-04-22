def add_five(number):
    return number + 5


def multiply_numbers(a, b):
    return a * b
result = multiply_numbers(3, 4)
print(result)  


def calculate_length(input_string):
    return len(input_string)
string_length = calculate_length("Hello, world!")
print(string_length) 



def get_lengths(string_list):
    return [len(s) for s in string_list]
strings = ["apple", "banana", "cherry"]
lengths = get_lengths(strings)
print(lengths)  




def is_palindrome(s):
    
    return s == s[::-1]


print(is_palindrome("wow"))  
print(is_palindrome("hello")) 
print(is_palindrome("level")) 
print(is_palindrome("madam")) 






def find_longest_string(string_list):
    longest_string = max(string_list, key=len)
    return longest_string


strings = ["apple", "banana", "cherry", "watermelon", "pineapple"]
longest = find_longest_string(strings)
print(longest)  




def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result


number = 5
print(f"The factorial of {number} is: {factorial(number)}")  





def max_sum_of_lists(list1, list2):
    max_sum_list1 = sum(list1)
    max_sum_list2 = sum(list2)
    return max_sum_list1, max_sum_list2


list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
result = max_sum_of_lists(list1, list2)
print(f"Max sum of list1: {result[0]}")
print(f"Max sum of list2: {result[1]}")






def min_difference_between_lists(list1, list2):
    min_value_list1 = min(list1)
    max_value_list1 = max(list1)
    min_value_list2 = min(list2)
    max_value_list2 = max(list2)
    
    min_difference = min(abs(min_value_list1 - max_value_list2), abs(min_value_list2 - max_value_list1))
    return min_difference


list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
result = min_difference_between_lists(list1, list2)
print(f"Minimum difference between lists: {result}")




def find_difference_between_max_min(numbers):
    if not numbers:
        return None
    
    max_num = max(numbers)
    min_num = min(numbers)
    difference = max_num - min_num
    return difference


numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
result = find_difference_between_max_min(numbers)
print(f"Difference between max and min: {result}")





def sum_of_elements(numbers):
    total_sum = sum(numbers)
    return total_sum


numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
result = sum_of_elements(numbers)
print(f"Sum of elements: {result}")




def count_vowels(s):
    vowels = "aeiouAEIOU"  
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count


input_string = "Hello, World!"
result = count_vowels(input_string)
print(f"Number of vowels in the string: {result}")






def square_elements(numbers):
    squared_list = [num ** 2 for num in numbers]
    return squared_list


input_list = [2, 4, 6, 8]
result = square_elements(input_list)
print(f"Squared elements: {result}")








def reverse_string(input_string):
    return input_string[::-1]


input_str = "Hello, World!"
reversed_str = reverse_string(input_str)
print(f"Original string: {input_str}")
print(f"Reversed string: {reversed_str}")





def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False


num1 = 12
num2 = 7

print(f"Is {num1} even? {is_even(num1)}")
print(f"Is {num2} even? {is_even(num2)}")






def longest_string(strings):
    longest = ""
    for s in strings:
        if len(s) > len(longest):
            longest = s
    return longest


string_list = ["apple", "banana", "orange", "kiwi"]
result = longest_string(string_list)
print(f"The longest string in the list is: {result}")






def find_min_integer(numbers):
    if not numbers:
        return None 
    return min(numbers)


number_list = [5, 2, 9, 1, 7]
result = find_min_integer(number_list)
print(f"The smallest integer in the list is: {result}")




import math

def find_gcd(a, b):
    return math.gcd(a, b)


num1 = 24
num2 = 36
result = find_gcd(num1, num2)
print(f"The GCD of {num1} and {num2} is: {result}")






def uppercase_string(input_str):
    return input_str.upper()


input_string = "Hello World"
result = uppercase_string(input_string)
print(f"The uppercase of '{input_string}' is: '{result}'")





def average_of_list(numbers):
    if len(numbers) == 0:
        return 0  

    sum_of_numbers = sum(numbers)
    average = sum_of_numbers / len(numbers)
    return average

num_list = [1, 5, 12]
result = average_of_list(num_list)
print(f"The average of the list {num_list} is: {result}")



