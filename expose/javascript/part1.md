# Question 1
20

# Question 2
20

# Question 3
You should not use "var" when declaring variables in javascript because it is a very outdated way of declaring variables and has many internal problems. For this specific example, we used var to declare the variable result within the if conditional that only runs when "add" is true. 
Since we ran the function with "add" being true, we should never have gotten into the else statement, but because of var, it was initialized right
when the function began. As a result, the terminal output 2 lines of code, which should not have happened. 

# Question 4
20

# Question 5
This code snippet resulted in an error because the variable "result" was not defined. This is because we used let to declare our variable instead of var. By using let, the variable "result" was bound to the scope of the if statement and could not reach the else statement. 

# Question 6
This code snippet resulted in an error because we tried to change the value of the constant variable. the "const" tag makes it so that a variable
is constant throughout the entire code and cannot be changed. 

# Question 7
This code snippet resulted in an error / printed nothing. This is because we never reached this line of code due to the error when we tried to update the value of a constant variable. 