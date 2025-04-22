# 1) სიისშეცვლა შეგვიძლია tuples ვერ შევცვლით set დაამატებ ან ამოიღებ რამეს
# 2
num = [2,5,2,7,2,5,8]
num2 = (6,3,2,8,6,7)
num3 = {2,8,4,3,5,6,7}
# 3
# list method
print(num.append(4))  
print(num.clear())  
print(num.sort())  
print(num.copy())  
print(num.count(5))  
print(num.extend([3, 6]))  
print(num.index(2))  
print(num.insert(1, 7))  
print(num.pop())  
print(num.remove(2))  
print(num.reverse())  
# tuple methods 
print(num2.count(3))
print(num.index(1))
# set methods
print(num.add(8))  
print(num.clear())  
print(num.copy())  
print(num.remove(5))  
print(num.pop())  