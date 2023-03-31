
list1 = []
num = int(input("Enter number of elements in 1st  list: "))
for i in range(1, num + 1):
    ele = int(input("Enter elements: "))
    list1.append(ele)
    
list2 = []
num = int(input("Enter number of elements in 2nd list: "))
for i in range(1, num + 1):
    ele = int(input("Enter elements: "))
    list2.append(ele)
def common(lst1, lst2): 
    return list(value for value in lst1 if value in lst2)
e=common(list1,list2)
print(e)