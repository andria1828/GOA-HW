#1)
def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0

#2)
def feast(beast, dish):
    return beast[0] + beast[-1] == dish[0] + dish[-1]





#3)
def feast(beast, dish):
    return beast[0] + beast[-1] == dish[0] + dish[-1]




#4)
def say_hello(name, city, state):
    name_str = ""
    for i, part in enumerate(name):
        if i > 0:
            name_str += " "
        name_str += part
    return f"Hello, {name_str}! Welcome to {city}, {state}!"




#5)
def points(games):
    score = 0
    for game in games:
        x, y = map(int, game.split(':'))
        if x > y:
            score += 3
        elif x == y:
            score += 1
    return score