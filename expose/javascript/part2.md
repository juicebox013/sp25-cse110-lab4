# Question 1
at line 12, we had the output 3. This is because the variable is global and is only visible after the loop ends.

# Question 2
at line 13, we had the output 150. This is because the variable is global and is only visible after the loop ends and at the end of the loop, the final value of discountedPrice was 150.

# Question 3
at line 14, we had the output 150. This is because the variable is global and is only visible after the loop ends and at the end of the loop, the final value of discountedPrice was 150. In addition to this, there was no error since the variable was declared outside of the if statement, so it would still work.

# Question 4
This would return [50, 100, 150] since we are updating the array after every iteration. We have all the values because the variable is only updated after each loop occurs and finalPrice is adjusted. 

# Question 5
This would result in an error because "i" is declared using let. Variables using the let tag are only visible within the scope of the function/block and since the console.log line is outside of the scope of the function/block, it is not visible.

# Question 6
This would result in an error because "discountedPrice" is declared using let. Variables using the let tag are only visible within the scope of the function/block and since the console.log line is outside of the scope of the function/block, it is not visible.

# Question 7
This would result in 150 since finalPrice is declared within the function and is updated in a loop that is within the same function. Since the scope of the variable is the function it is created in, we are able to use it in the console.log line that is also within the same function.

# Question 8
This would result in [50, 100, 150] since discounted is declared within the function and is updated in a loop that is within the same function. Since the scope of the variable is the function it is created in, we are able to use it in the console.log line that is also within the same function.

# Question 9
This would result in an error since the variable "i" is not declared. The variable "i" is being declared using let, so it is only visible within the scope of the loop.

# Question 10
This would result in an output of 3. This is because we declared "length" as a constant variable within the function, so it will never change and since we called it within the same function, it is within the scope. 

# Question 11
This would result in [50, 100, 150]. This is because the constant tag binds the variable to the same object, or in other words, you cannot change what it is pointing to. We were able to update "discounted" because we are not changing what the variable is pointing to, but rather modifying the same array. 

# Question 12
A - student.name
B - student['Grad Year']
C - student.greeting()
D - student['Favorite Teacher'].name
E - student.courseLoad[0]

# Question 13
A - 32 because 2 was converted into a string to be able to concatenate to 3
B - 1 because '3' was converted into a integer to accomodate for the subtract
C - 3 because 'null' was converted into an arithmetic 0
D - 3null because 'null' was converted into a string 
E - 4 because 'true' was converted to its value of 1 in arithmetic
F - 0 because 'false' was converted to its value of 0 in arithmetic and null was converted to 0. 
G - 3undefined because 'undefined' was converted into string to match 
H - NaN because both the string '3' and undefined are converted into integers. 3 - NaN = NaN


# Question 14
A - true because the string '2' is converted into an integer and 2 > 1
B - true because JS compares the strings in lexographical order. In this case, it compared '2' > '1' which is true
C - true because JS converts strings into numbers so '2' was converted into 2 and 2 == 2 is true
D - false because when using "===" JS is comparing types. 
E - false because JS converts true into an integer 1. 1 == 0 is false
F - true because the function Boolean() converts the type of whatever is inside to a boolean. Since === checks for types, it comes to be true.

# Question 15
The difference between "==" and "===" is that === is a strict type checker in which it checks to see if the two variables being compared are of the same type. On the other hand, == is a non-strict type checker in which you can check the comparisons of two variables of different types and they are converted accordingly. 

# Question 16
check JS file

# Question 17
this will result in [2,4,6]. We arrived at this result because our function, 'modifyArray' took in two parameters, [1,2,3] and the function doSomething. This function first created a new and empty array, newArr, and then iterated through this newly created array based on the length of our inputted array of [1,2,3]. For each iteration, we calculated a value using the function we used as the other parameter and pushed it into the newArr. The function in which we used as a parameter takes in the array we input into the original function and takes the value at each index and multiplies it by 2. Then this value is pushed into the newArr. At the end of the function, we return newArr. 

# Question 18
check JS file

# Question 19
1
4
3
2