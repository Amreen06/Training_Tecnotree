# Prompt the user to enter a list of strings, separated by spaces
words_str = input("Enter a list of words, separated by spaces: ")

# Convert the user input into a list of strings
words = words_str.split()

# Define a function to check if a string is a palindrome
def is_palindrome(word):
    return word == word[::-1]

# Use a list comprehension to create a new list with only the palindromes
palindromes = [word for word in words if is_palindrome(word)]

# Print the list of palindromes
print(palindromes)