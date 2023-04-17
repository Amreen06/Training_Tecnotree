
# Python program to sort a list of strings
n = int(input("Enter the number of strings: "))
string_list = []

for i in range(n):
    string = input("Enter string " + str(i+1) + ": ")
    string_list.append(string)

 
# Using sort() function
string_list.sort()
 
print(string_list)