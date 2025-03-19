name=input("please enter your name:")

x = name.upper()

print (x)


name=input("please enter your name:")

x = name.capitalize()

print (x)



# capitalize მეთოდია, რომელიც ცვლის სტრიქონის პირველ სიმბოლოს დიდზე, ხოლო დანარჩენის გარდაქმნას პატარა რეგისტრში

# upper გარდაქმნის ყველა სიმბოლოს დიდ ასოებად,


name=input("please enter your name:")

x = name.lower()

print (x)





sentence = "Python is cool!"
x = sentence.count("o")

print (x)

# სტრინგია, რომელიც ჩაიწერება ცვლადში 
# count მეთოდით ჩაიწერება ასოების რაოდენობა   
#  lower მეთოდით მაღალი ასოები ჩაიწერება პატარა ასოებად



txt = " my name is andria ."

x = txt.find("i")

print(x)


txt = " my name is andria ."

x = txt.index("n")

print(x)

#index თუ არ მოიძებნება კონკრეტული ასო აგდებს error ს მაგრამ find ზე -1თს

emails = []

count = int(input("Please enter how many emails do you want to input: "))

for i in range(count):
    email = input("Please enter email: ")

    if email.endswith("@gmail.com"):
        emails.append(email)
        print("Email was correct")
    else:
        print("Invalid email")


print(emails)

#აბრუნებს True-ს, თუ სტრიქონი მთავრდება მითითებული მნიშვნელობით, წინააღმდეგ შემთხვევაში False
#განსაზღვრავს, იწყება თუ არა ეს სტრიქონი მითითებული სტრიქონის სიმბოლოებით, აბრუნებს თუ არა ჭეშმარიტს ან ცრუ