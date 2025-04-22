def add(num1,num2):
    print(num1 + num2)

add(5, 7)


def calculate(num1, num2):
    print("Choose an operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

    operation = input("Enter operation number (1/2/3/4): ")

    if operation == '1':
        result = num1 + num2
        print(str(num1) + " + " + str(num2) + " = " + str(result))
    elif operation == '2':
        result = num1 - num2
        print(str(num1) + " - " + str(num2) + " = " + str(result))
    elif operation == '3':
        result = num1 * num2
        print(str(num1) + " * " + str(num2) + " = " + str(result))
    elif operation == '4':
        if num2 != 0:
            result = num1 / num2
            print(str(num1) + " / " + str(num2) + " = " + str(result))
        else:
            print("Error: Division by zero!")
    else:
        print("Invalid operation number")


num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

calculate(num1, num2)



def print_strings_as_list(*args):
    string_list = []
    for i, arg in enumerate(args):
        string_input = input(f"Enter string {i+1}: ")
        string_list.append(string_input)
    
    print("List of strings entered:")
    print(string_list)
