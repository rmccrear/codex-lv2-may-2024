### Assignment: Fetching Pokémon Data and Displaying It in a Card

#### Objective:
In this assignment, you will create a webpage that allows users to fetch data from the PokéAPI by entering a Pokémon's name or ID. You will use JavaScript to fetch the data, a factory function to create a Pokémon object, and then display the Pokémon's information in a styled card on the page.

#### Instructions:

1. **Set Up Your HTML File:**
   - Create a file named `index.html`.
   - Inside the `<body>`, create a form with a text input for the Pokémon's name or ID.
   - Add a button (type="button") to submit the form.

2. **Set Up Your JavaScript File:**
   - Create a file named `script.js`.
   - Add an event listener to the button that triggers a function to fetch data from the PokéAPI.
   - Proof of Life: Add a `console.log` inside the event listener to ensure it is triggered when the button is clicked.

3. **Fetch Data from the PokéAPI:**
   - Use the fetch API to request data for the Pokémon entered by the user.
   - Handle errors gracefully (e.g., display a message if the Pokémon is not found).
   - Proof of Life: Log the fetched data to the console to verify the correct data is being retrieved.

4. **Create a Pokémon Object:**
   - Define a factory function named `createPokemon` in `script.js` that takes the fetched data as an argument.
   - The factory function should return an object with properties like `name`, `id`, `type`, and `sprite`.
   - Proof of Life: Log the created Pokémon object to the console to ensure it is being created correctly.

5. **Display the Pokémon Data:**
   - Create a function that generates HTML for the Pokémon card using the properties of the Pokémon object.
   - Add this HTML to the DOM, inside a container element.
   - Proof of Life: Ensure the Pokémon card appears on the page when the user submits the form.

6. **Style the Pokémon Card (Optional):**
   - Use CSS to style the Pokémon card, making it visually appealing.
   - Consider using a framework like Bootstrap for easy styling.

#### Learning Objectives:
By completing this assignment, you will learn how to interact with an external API, handle asynchronous data, use factory functions to create objects from API data, and dynamically manipulate the DOM to display content on a webpage.

#### Evaluation Criteria (10 Points):
1. **HTML Structure (2 Points)**  
   - 1 point: Form and input elements are correctly set up.
   - 1 point: Button triggers the correct JavaScript function.

2. **Fetching Data (2 Points)**  
   - 1 point: Data is successfully fetched from the PokéAPI.
   - 1 point: Errors are handled appropriately.

3. **Factory Function (2 Points)**  
   - 1 point: Pokémon object is created correctly using the factory function.
   - 1 point: Object properties are accurate and complete.

4. **Displaying Data (2 Points)**  
   - 1 point: Pokémon card is generated with correct HTML.
   - 1 point: Card is displayed on the page.

5. **Code Quality and Style (2 Points)**  
   - 1 point: Code is well-organized and commented.
   - 1 point: Optional CSS is used to style the Pokémon card.