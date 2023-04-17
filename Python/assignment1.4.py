import statistics
 
list1 = []
num = int(input("Enter number of elements in list: "))
for i in range(1, num + 1):
    ele = int(input("Enter elements: "))
    list1.append(ele)
 
# printing list
print("The original list : " + str(list1))
res = statistics.median(list1)
 
# Printing result
print("Median of list is : " + str(res))