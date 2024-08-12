### Assignment: Managing Your Pet Kennel with JavaScript Arrays

#### Objective:
This assignment will help you practice using arrays in JavaScript by creating and managing a collection of pet objects. You'll learn how to add items to an array using both the `push` method and bracket notation.

#### Instructions:

1. **Create a Pet Factory Function:**
   - Define a factory function named `createPet` that accepts three parameters: `name`, `species`, and `happiness`. The function should return an object with these properties. The object should also have the methods `status`, `feed`, and `play` as it did in previous assignments.

2. **Create Multiple Pets:**
   - Use the `createPet` function to create at least three different pets, each with unique names, species, and happiness levels.

3. **Initialize the Kennel Array:**
   - Create an empty array named `kennel` to store your pets.

4. **Add Pets to the Kennel Using `push`:**
   - Use the `push` method to add at least 5 of your pet objects to the `kennel` array.

5. **Add Pets to the Kennel Using Bracket Notation:**
   - Use bracket notation to add the remaining pet(s) to the `kennel` array.

6. **Log the Kennel Contents:**
   - Print the contents of the `kennel` array to the console, displaying all the pets.

#### Bonus Task (Optional):
   - Add a method named `rest` to the pet object that increases the `happiness` level by 5. Update each pet's happiness in the `kennel` by calling the `rest` method, and log the updated kennel.

#### Submission:
Submit your code in a JavaScript file named `kennel.js`. Ensure your code is well-commented to explain each step.

#### Example Output:
```javascript
let pet1 = createPet("Buddy", "Dog", 60);
let pet2 = createPet("Mittens", "Cat", 50);
let pet3 = createPet("Goldie", "Fish", 40);

let kennel = [];

kennel.push(pet1);
kennel.push(pet2);

kennel[kennel.length] = pet3;

console.log(kennel);

// Bonus Task
kennel.forEach(pet => pet.rest());
console.log(kennel);
```

#### Evaluation Criteria:
- Correct implementation of the `createPet` function. (5 points)
- Proper addition of pets to the `kennel` array using both `push` and bracket notation. (5 points)
- Correct display of the `kennel` array's contents. (5 points)
- Clear and concise comments explaining the code. (3 points)
- Successful completion of the bonus task (if attempted). (2 points)