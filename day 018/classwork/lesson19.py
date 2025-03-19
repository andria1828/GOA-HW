
numbers_list = []

for num in range(1, 11):
    numbers_list.append(num)

list_length = len(numbers_list)

print("Numbers list:", numbers_list)
print("Length of the list:", list_length)

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

numbers_list = []

start_num = min(num1, num2)
end_num = max(num1, num2)

for num in range(start_num, end_num + 1):
    numbers_list.append(num)

print("Numbers between", start_num, "and", end_num, "are:", numbers_list)

start_num = int(input("Enter the starting number: "))
end_num = int(input("Enter the ending number: "))

numbers_list = []

start_range = min(start_num, end_num)
end_range = max(start_num, end_num)

for num in range(start_range, end_range + 1):
    numbers_list.append(num)

max_num = max(numbers_list)
min_num = min(numbers_list)
sum_nums = sum(numbers_list)

print("Numbers between", start_range, "and", end_range, "are:", numbers_list)
print("Maximum number:", max_num)
print("Minimum number:", min_num)
print("Sum of all numbers:", sum_nums)


num_count = int(input("How many numbers do you want to enter? "))

numbers_list = []

for i in range(num_count):
    num = float(input(f"Enter number {i+1}: "))  
    numbers_list.append(num)

sum_numbers = sum(numbers_list)

print("The sum of the entered numbers is:", sum_numbers)


car_names = ["Ferrari", "Lamborghini", "Porsche", "BMW", "Audi", "Tesla"]

first_three = car_names[:3]

last_two = car_names[-2:]

print("First three elements:", first_three)
print("Last two elements:", last_two)

third_from_right = car_names[-3]
fourth_from_right = car_names[-4]

print("Third from the right (negative index -3):", third_from_right)
print("Fourth from the right (negative index -4):", fourth_from_right)



my_name = "andria"

name_list = [my_name, my_name]

for name in name_list:
    if name == my_name:
        print("hello admin")
    else:
        print("hello user")





        favorite_cars = ["Ferrari", "Lamborghini", "Porsche", "BMW", "Audi", "Tesla"]

first_three = favorite_cars[:3]

last_two = favorite_cars[-2:]

print("First three elements:", first_three)
print("Last two elements:", last_two)

third_from_right = favorite_cars[-3]
fourth_from_right = favorite_cars[-4]

print("Third from the right (negative index -3):", third_from_right)
print("Fourth from the right (negative index -4):", fourth_from_right)

