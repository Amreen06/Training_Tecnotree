#todo list
# define an empty list to hold the tasks
tasks = []

# loop until the user quits
while True:
    # print the menu options
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark task as done")
    print("4. Remove task")
    print("5. Edit task")
    print("6. Quit")

    # get the user's choice
    choice = input("Enter your choice (1-6): ")

    # perform the appropriate action based on the user's choice
    if choice == "1":
        task = input("Enter a new task: ")
        tasks.append(task)
        print("Task added.")
    elif choice == "2":
        print("Tasks:")
        for i, task in enumerate(tasks):
            print(f"{i+1}. {task}")
        if len(tasks) == 0:
            print("No tasks.")
    elif choice == "3":
        if len(tasks) == 0:
            print("No tasks.")
        else:
            index = int(input("Enter the index of the task to mark as done: "))
            if index < 1 or index > len(tasks):
                print("Invalid index.")
            else:
                tasks.pop(index-1)
                print("Task marked as done.")
    elif choice == "4":
        if len(tasks) == 0:
            print("No tasks.")
        else:
            index = int(input("Enter the index of the task to remove: "))
            if index < 1 or index > len(tasks):
                print("Invalid index.")
            else:
                tasks.pop(index-1)
                print("Task removed.")
    elif choice == "5":
        if len(tasks) == 0:
            print("No tasks.")
        else:
            index = int(input("Enter the index of the task to edit: "))
            if index < 1 or index > len(tasks):
                print("Invalid index.")
            else:
                new_task = input("Enter the new task: ")
                tasks[index-1] = new_task
                print("Task updated.")
    elif choice == "6":
        print("Goodbye!")
        break
    else:
        print("Invalid choice.")
