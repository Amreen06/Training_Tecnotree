# Python program to read a String and Print Longest
str = input("Enter a String: ")
# Split the string to a list of words
word_list = str.split()
# Find the longest word
longest_word = max(word_list, key = len)
# Find the position (index) of longest word
pos = str.index(longest_word)
# Print the longest word and it's position
print("Longest word: ",longest_word)
print("Position of Longest word: ", pos)
