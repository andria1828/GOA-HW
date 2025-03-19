def odd_index_sum(numbers):
    total_sum = 0
    for i in range(len(numbers)):
        if i % 2 != 0:  
            total_sum += numbers[i]
    print(total_sum)


numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
odd_index_sum(numbers1)  

numbers2 = [10, 20, 30, 40, 50]
odd_index_sum(numbers2)  
