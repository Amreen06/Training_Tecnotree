list1 = []
num = int(input("Enter number of elements in list: "))
for i in range(1, num + 1):
    ele = int(input("Enter elements: "))
    list1.append(ele)


squared_numbers = [list1 ** 2 for list1 in list1]

print(squared_numbers)