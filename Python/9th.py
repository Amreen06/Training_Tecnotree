#program that uses lamda functions and list comprehension to filter out even numbers from a list and double the remaining odd numbers
num = int(input("Enter number of elements in list: "))
list1 = [int(input("Enter elements: ")) for i in range(num)]

result = [x * 2 for x in list1 if x % 2 != 0]

print(result)

