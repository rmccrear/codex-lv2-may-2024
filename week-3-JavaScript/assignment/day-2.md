### Follow-Up Assignment: Exploring Factory Functions with a Pet Example

#### Objective:
This assignment will help you understand and implement factory functions in JavaScript by creating a function that generates pet objects. You'll learn how to encapsulate object creation logic within a function and practice using factory functions to create multiple instances of pet objects.

NOTE: The trick to this is to put object creation inside a function the, RETURN THAT OBJECT with a return statement.

#### Instructions:

1. **Create a Pet Factory Function:**
   - Create a new file called `index-2.js`.
   - Define a function named `createPet` that returns an object.
   - The object should have the following properties:
     - `name`: a string representing the pet's name.
     - `species`: a string representing the type of pet (e.g., "Dog", "Cat").
     - `happiness`: a number representing the pet's happiness level (start with 50).
     - `energy`: a number representing the pet's energy level (start with 100).

2. **Add Methods:**
   - Add a method named `play` to the pet object. This method should decrease the `energy` by 20, increase the `happiness` by 10, and return a message like, "You played with Fluffy! Happiness is now 60, and energy is now 80."
   - Add a method named `feed` to the pet object. This method should increase both the `happiness` and `energy` properties by 20 and print a message like, "You fed Fluffy! Happiness is now 80, and energy is now 100."
   - Add a method named `status` to the pet object. This method should print a message like, "Pet Name: Fluffy, Species: Dog, Happiness: 80, Energy: 100."

3. **Implement and Test:**
   - Create multiple pets using the `createPet` factory function, each with different names and species.
   - Log the following to the console for each pet:
     1. The initial status using the `status` method.
     2. The message returned by the `play` method.
     3. The updated status after calling the `feed` method.

4. **Bonus Task (Optional):**
   - Add a method named `rest` to the pet object that fully restores the `energy` to 100 and returns a message like, "Fluffy has rested. Energy is now fully restored to 100."
   - Test this method by resting one of your pets and logging the new status using the `status` method.

#### Submission:
Use git to commit and push your code. Your code for day 2 will be in the file `index-2.js`. Ensure your code is well-commented to explain what each part does.

#### Example Output:
```javascript
let pet1 = createPet('Fluffy', 'Dog');
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 50, Energy: 100
console.log(pet1.play()); // Output: You played with Fluffy! Happiness is now 60, Energy is now 80.
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 60, Energy: 80
console.log(pet1.feed()); // Output: You fed Fluffy! Happiness is now 70, Energy is now 100.
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 70, Energy: 100

let pet2 = createPet('Rex', 'Dog');
let pet3 = createPet('Frisky', 'Cat');
pet2.status();
pet3.status();

// If you did the bonus task:
pet1.rest();
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 70, Energy: 100
```

#### Evaluation Criteria:
- Correct implementation of the `createPet` factory function with all required properties and methods. (5 points)
- Proper use of JavaScript syntax and object-oriented principles. (5 points)
- Clear and concise comments explaining the code. (3 points)
- Successful completion of the bonus task (if attempted). (2 points)
- Note: Completing required tasks will result in 13/15 score (an "A"). Completing the bonus will result in 20/20 (an "A+").