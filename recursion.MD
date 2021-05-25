- George and the dragon story
  \*\* recursion is just doing the same operation/function on the same problem

What is recursion?
A _process_ (a function in our case) that _calls itself_

- JSON.parse / JSON.stringify are actually recursive functions :)
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's someties a cleaner alternative to iteration

The call stack

- Any time a function is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compler will remove (pop)

Why do I care?

- You're used to function being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

How recursive functions work

- Invoke the same function with a different input until you reach your base case!

Base Case

- The condition when the recursion ends. _This is the most important concept to understand_

Two essential parts of a recursive funtion!

- Base Case
- Different Input
