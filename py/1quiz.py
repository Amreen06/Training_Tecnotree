#quiz 
import random

print("Welcome to the quiz game!")

# Load the questions from the text file
questions = []
with open("quiz.txt") as f:
    for line in f:
        parts = line.strip().split(",")
        question = {
            "question": parts[0],
            "options": parts[1:5],
            "answer": parts[5]
        }
        questions.append(question)

# Define a function to ask a random question and remove it from the list
def ask_random_question(questions):
    question = random.choice(questions)
    questions.remove(question)
    return ask_question(question)

# Define a function to ask a question and check the answer
def ask_question(question):
    print(question["question"])
    for option in question["options"]:
        print(option)
    answer = input("Enter your answer (A, B, C, or D): ")
    if answer.upper() == question["answer"]:
        print("Correct!")
        return True
    else:
        print("Incorrect.")
        return False

# Ask each question in random order and keep track of the score
score = 0
while questions:
    if ask_random_question(questions):
        score += 1

# Print the final score
print("You got", score, "out of 3 questions correct.")

# Write the score to a text file
with open("score.txt", "a") as f:
    f.write(str(score) + "\n")