# Week 3

## Day 1

- Questions about last week's work
- Discuss strategies
- Dev Tools vs Node environment

- JavaScript Object Review
- What is `this`

## Day 2

- Reading
  - Question 2: In what scenarios would you need to use bracket notation instead of dot notation to access a property in an object? Provide an example.
    - Answer: You would need to use bracket notation if the property name is unusual for some reason. For example:
    - cat["name"] is OK to use with dot notation.
    - cat["last name"] is not because it contains a space.
  - Question 4: How does the behavior of the this keyword differ when used in a function inside the global context compared to when it's used inside an object method?
    - Answer: In a method, `this` refers to the object.
    - In a function, `this` is the "global context".
