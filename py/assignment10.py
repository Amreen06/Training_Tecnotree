numlist = [ ]
even_sum = 0
number = int(input("Total Number of Elements: "))
for i in range(1, number + 1):
    value = int(input("Enter the Value of %d Element : " %i))
    numlist.append(value)
for j in range(number):
    if(numlist[j]% 2 == 0):
            even_sum = even_sum + numlist[j]
print(even_sum)