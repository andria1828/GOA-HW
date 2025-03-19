numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

divisible_by_3 = []

for number in numbers:
    if number % 3 == 0:
        divisible_by_3.append(number)

print("Original list of numbers:", numbers)

print("Numbers divisible by 3:", divisible_by_3) 