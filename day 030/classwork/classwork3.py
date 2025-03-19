def odd_index_sum(numbers):

    odd_index_sum = 0

   
    for index in range(len(numbers)):
        if index % 2 != 0: 
            odd_index_sum += numbers[index]

   
    return odd_index_sum

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = odd_index_sum(numbers)
print("კენტი ინდექსებზე მყოფი რიცხვების ჯამი:", result)