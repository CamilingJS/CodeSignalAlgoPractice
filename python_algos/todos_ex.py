# todos1 = ["Walk dog", "Feed cat"]

# def todo_list(todos):
#     for idx, todo in enumerate(todos):
#         print("Your current todos \n")
#         print(f"{idx+1}). {todo}")
#     command = input("Enter a command. Type 'h' for help: " )
#     if command.isdigit():
#         print("This is a number", command)
#         todos.pop(int(command))
#         print(todos)
#     elif isinstance(command, str):
#         todos.append(command)
#     for idx, todo in enumerate(todos):
#         print(f"{idx+1}). {todo}")
#     return todos

# todo_list(todos1)
# print(todos1)

header = """
  _____         _           
 |_   _|__   __| | ___  ___ 
   | |/ _ \ / _` |/ _ \/ __|
   | | (_) | (_| | (_) \__ \\
   |_|\___/ \__,_|\___/|___/
                            
"""
print(header)
todos = []
completed = []
while True:
    for i in range(len(todos)):
        print(f"{i+1}) {todos[i]}")
    
    print("-" * 24)
    print("Enter a command. Type 'h' for help: ")
    command = input("> ")
    if command == "q":
        break
    elif command == "h":
        print("TODO LIST HELP")
        print("Type 'q'' to quit")
        print("To add a todo to the list, type it and hit enter ")
        print("To complete a todo enter its number")
    elif command.isnumeric():
        idx = int(command) -1
        if idx >= len(todos):
            print("THERE IS NO TODO WITH THAT NUMBER!")
        else:
            done_todo = todos.pop(idx)
            completed.append(done_todo)
    else:
        todos.append(command)
if completed: 
    print(f"You completed {len(completed)} todos today: ")
    for todo in completed:
        print(f"* {todo}")        
