def even_sum(numbers):
   
    even_sum = 0


    for number in numbers:
        if number % 2 == 0: 
            even_sum += number

    return even_sum

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = even_sum(numbers)
print("ლუწი რიცხვების ჯამი:", result)
