### Assignment: Fetching and Displaying Pokémon Item Names in Multiple Languages

#### Objective:
In this assignment, you’ll create a webpage with JavaScript and an HTML form to fetch data from the PokéAPI. You’ll focus on retrieving the names of a Pokémon item in all available translations and displaying them in a list.

#### Instructions:

1. **Setup the Project:**
   - Create two files: `poke-items.html` and `poke-items.js`.
   - In `poke-items.html`, include the `poke-items.js` file using a `<script>` tag before the closing `</body>` tag.
   - **Proof of Life:** 
     - Add a `console.log("Hello from poke-items.js!")` in `poke-items.js`.
     - Open `poke-items.html` in your browser and check the console to ensure the message appears.

2. **Create the HTML Form:**
   - In `poke-items.html`, create a form with a text input and a button (type="button").
     - The text input should allow the user to enter the name or ID of the Pokémon item they want to fetch (e.g., "ultra-ball").
   - **Proof of Life:**
     - Add an event listener to the button in `poke-items.js` that logs the value of the text input to the console when clicked.

3. **Fetch Data from the PokéAPI:**
   - In `poke-items.js`, write a function to fetch data from the PokéAPI based on the user's input.
     - Use the URL `https://pokeapi.co/api/v2/item/{id_or_name}/` (replace `{id_or_name}` with the input value).
   - **Proof of Life:**
     - Log the fetched data to the console to ensure the API call is working correctly.

4. **Process and Display Translations:**
   - After fetching the item data, extract the `names` array, which contains the translations.
   - Loop through the `names` array to get each translation and push it to a new array of translation strings.
   - For **Proof of Life**, log the array of translations to the console to verify they have been extracted correctly.
   - Sort the array alphabetically. (optional)
   - Display the translations in a list on the webpage. You may use a `<ul>` element in your HTML to hold the list items.

5. **Dynamic DOM Update:**
   - When the user clicks the button, clear any existing list items in the `<ul>`, and populate it with the newly fetched translations.
   - **Proof of Life:**
     - Verify that the list updates dynamically without reloading the page.

6. **Bonus Task (Optional):**
   - Style the list using CSS to improve its appearance.
   - Add error handling to display a message if the API request fails (e.g., if the item name doesn’t exist).

7. **Version Control with Git:**
   - Commit your changes to Git after each significant step.
   - Ensure your commit messages are clear and descriptive.

#### Evaluation Criteria (10 Points):

1. **Project Setup and Form Creation (2 Points)**
   - 1 point: Correct setup of HTML and JavaScript files.
   - 1 point: Form inputs and button correctly log user input.

2. **API Fetch and Data Handling (3 Points)**
   - 1 point: API fetch is correctly implemented.
   - 2 points: Translations are correctly extracted and logged.

3. **Array Processing (3 Points)**
   - 2 points: Translations array is correctly processed and sorted.
   - 1 point: Dynamic DOM update works as expected.

4. **Git Usage (2 Points)**
   - 2 points: Proper use of Git with meaningful commit messages.

**Total: 10 Points**