def arithmetic_operations(a, b):
    # ჯამი
    sum_result = a + b
    # სხვადასხვა
    difference_result = a - b
    # გამრავლება
    product_result = a * b
    # გაყოფა
    if b != 0:
        division_result = a / b
    else:
        division_result = None  
    
    return {
        'sum': sum_result,
        'difference': difference_result,
        'product': product_result,
        'division': division_result
    }

a = 10
b = 5
results = arithmetic_operations(a, b)
print(f"Results for {a} and {b}:")
print("Sum:", results['sum'])
print("Difference:", results['difference'])
print("Product:", results['product'])
if results['division'] is not None:
    print("Division:", results['division'])
else:
    print("Division by zero is undefined.")



def add_until_sum_less_than_100(a, b):
    sum_result = a + b
    while sum_result >= 100:
        b -= 1
        sum_result = a + b
    
    return sum_result, b

a = 80
b = 30
sum_result, adjusted_b = add_until_sum_less_than_100(a, b)

print(f"Adjusted sum: {sum_result}")
print(f"Adjusted second number: {adjusted_b}")







def is_even_or_odd(number):
    if number % 2 == 0:
        return True  
    else:
        return False  

numbers = [5, 10, 3, 8, 7]
for number in numbers:
    if is_even_or_odd(number):
        print(f"{number} is even.")
    else:
        print(f"{number} is odd.")




def find_max_number(nums):
    if not nums:
        return None  
    
    max_num = nums[0]  
    
    for num in nums:
        if num > max_num:
            max_num = num
    
    return max_num

numbers = [3, 7, 2, 9, 5]
max_number = find_max_number(numbers)
print(f"The maximum number in the list is: {max_number}")





def sum_of_list(numbers):
    total_sum = 0
    
    for num in numbers:
        total_sum += num
    
    return total_sum

numbers = [3, 7, 2, 9, 5]
list_sum = sum_of_list(numbers)
print(f"The sum of the numbers in the list is: {list_sum}")




def concat_and_return_length(string, integer):
    concatenated = string + str(integer)
    length = len(concatenated)
    return concatenated, length

string_input = "Hello"
integer_input = 123
result_string, result_length = concat_and_return_length(string_input, integer_input)
print(f"Concatenated string: {result_string}")
print(f"Length of concatenated string: {result_length}")





def find_longest_and_shortest(strings):
    if not strings:
        return None, None
    
    longest = min(strings, key=len)  
    shortest = max(strings, key=len)  
    
    return longest, shortest

string_list = ["apple", "banana", "orange", "kiwi"]
longest_string, shortest_string = find_longest_and_shortest(string_list)

print(f"The longest string is: {longest_string}")
print(f"The shortest string is: {shortest_string}")




def swap_case(input_string):
    swapped_string = ""
    
    for char in input_string:
        if char.islower():
            swapped_string += char.upper()
        elif char.isupper():
            swapped_string += char.lower()
        else:
            swapped_string += char
    
    return swapped_string

input_str = "Hello World 123!"
result_str = swap_case(input_str)

print(f"Original string: {input_str}")
print(f"Swapped case string: {result_str}")




def count_letters(string):
    count = 0
    for char in string:
        if char.isalpha(): 
            count += 1
    return count


input_string = "Hello World 123!"
letter_count = count_letters(input_string)

print(f"The number of letters in the string is: {letter_count}")




def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

print(is_even(4))  
print(is_even(7))  
print(is_even(0))  
print(is_even(-5)) 






def sum_even_indices(numbers):
    total = 0
    for index in range(len(numbers)):
        if index % 2 == 0:  
            total += numbers[index]
    return total

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(sum_even_indices(numbers)) 




def is_even_or_odd(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"
    
print(is_even_or_odd(4))  
print(is_even_or_odd(7))  
print(is_even_or_odd(0))  
print(is_even_or_odd(-5)) 





def is_prime(number):
    if number <= 1:
        return False  
    
  
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False  
    
    return True  









def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True  
    if n % 2 == 0:
        return False  
    sqrt_n = int(n**0.5) + 1
    for i in range(3, sqrt_n, 2):
        if n % i == 0:
            return False
    return True

number = 29
if is_prime(number):
    print(f"{number} მარტივია")
else:
    print(f"{number} არ არის მარტივი")










def capitalize_names(names):
    capitalized_names = [name.capitalize() for name in names]
    return capitalized_names

names = ["alice", "bob", "charlie"]
updated_names = capitalize_names(names)
print(updated_names)










def modify_list(numbers):
    modified_list = []
    for num in numbers:
        if num % 2 == 0:
            modified_list.append(num + 2)
        else:
            modified_list.append(num * 2)
    return modified_list

numbers = [1, 2, 3, 4, 5]
updated_numbers = modify_list(numbers)
print(updated_numbers)













def reverse_and_capitalize(text):
    reversed_text = text[::-1] 
    capitalized_text = reversed_text.upper() 
    return capitalized_text

input_text = "hello world"
result = reverse_and_capitalize(input_text)
print(result)





def categorize_strings(string_list):
    odd = []
    even = []

    for string in string_list:
        count_upper = sum(1 for char in string if char.isupper())
        if count_upper % 2 == 0:
            even.append(string.upper())
        else:
            odd.append(string.upper())

    print("Odd strings:", odd)
    print("Even strings:", even)

string_list = ["dato", "nika", "polieqtori", "zaza", "python", "java"]
categorize_strings(string_list)







def process_string_list(string_list):
    odd_count_list = []
    even_count_list = []

    for string in string_list:
        upper_case_string = string.upper()

        even_count = sum(1 for char in upper_case_string if char.isalpha() and char.isupper() and ord(char) % 2 == 0)
        odd_count = len(upper_case_string) - even_count

        if even_count % 2 == 0:
            even_count_list.append(upper_case_string)
        else:
            odd_count_list.append(upper_case_string)

    print("Odd Count List:", odd_count_list)
    print("Even Count List:", even_count_list)

string_list = ["dato", "nika", "polieqtori", "zaza", "python", "java"]
process_string_list(string_list)





def process_string_list(string_list):
    lower_case_list = []
    upper_case_list = []

    for string in string_list:
        if string.isupper():
            lower_case_list.append(string.lower())
        elif string.islower():
            upper_case_list.append(string.upper())

    final_list = lower_case_list + upper_case_list
    print(final_list)

string_list = ["dato", "LUKA", "nika", "POLIEQTORI", "zaza"]
process_string_list(string_list)


