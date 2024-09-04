### Assignment: Querying a Huggingface Model with Pokémon Strategy Input

#### Objective:
In this assignment, you will enhance your skills in working with APIs and `localStorage` by querying a Huggingface model with a prompt based on two Pokémon. You will create a strategy prompt using data from an HTML form and dynamically update the webpage with the model's suggested strategy.

#### Instructions:

1. **Set Up Your Files:**
   - Create an HTML file named `pokemon-strategy.html`.
   - Create a JavaScript file named `pokemon-strategy.js`.
   - Link your `pokemon-strategy.js` to `pokemon-strategy.html` using a `<script>` tag just before the closing `</body>` tag.

2. **Create the HTML Form:**
   - In `pokemon-strategy.html`, create a form with the following elements:
     - Two text input fields for entering the names of two Pokémon.
     - A button with the type `button` to submit the input.
   - Below the form, add a `<div>` element with an id of `strategy-output` where the response from the API will be displayed.

3. **Store and Retrieve API Key in `localStorage`:**
   - In `pokemon-strategy.js`, store a dummy API key in `localStorage` (e.g., `"huggingface_key": "your_dummy_key"`).
   - Write a function to retrieve this API key from `localStorage` when needed.
   - **Proof of Life:** Log the retrieved API key to the console to ensure it's correctly stored and retrieved.

4. **Handle Form Submission:**
   - Add an event listener to the button that triggers a function when clicked.
   - In this function, retrieve the names of the two Pokémon from the text fields and the API key from `localStorage`.

5. **Create the Strategy Prompt:**
   - Combine the two Pokémon names into a strategy prompt. For example:
     - `"Given a battle between Pikachu and Charizard, which strategy would be best?"`
   - Encourage students to engineer their own unique prompts based on different Pokémon combinations.

6. **Query the Huggingface Model:**
   - Write a function that sends a POST request to the Huggingface model's API using `fetch`.
   - The request should include the strategy prompt and the API key in the headers.
   - The body of the request should include the input data in the format required by the model (e.g., a text input for a text generation model).
   - **Proof of Life:** Log the response to the console to ensure the request was successful.

7. **Display the Response:**
   - Once the API response is received, extract the relevant data from the response object.
   - Update the innerHTML of the `<div>` with id `strategy-output` to display the model's suggested strategy on the webpage.

8. **Version Control with Git:**
   - After each significant step, commit your changes using Git.
   - Make sure to write clear and descriptive commit messages.

#### Example Prompt:
- `"Given a battle between Bulbasaur and Squirtle, which strategy would be most effective?"`
- **Encouragement:** Try to create your own unique prompt. Consider factors like type advantages, special abilities, or movesets to make your prompt more interesting.

#### Evaluation Criteria (10 Points):

1. **HTML Structure (2 Points)**
   - 1 point: Correctly creates and structures the form in `pokemon-strategy.html`.
   - 1 point: Correctly includes a `<div>` to display the API response.

2. **LocalStorage Usage (2 Points)**
   - 1 point: Stores the API key in `localStorage`.
   - 1 point: Retrieves the API key correctly and logs it to the console.

3. **Prompt Creation (2 Points)**
   - 1 point: Correctly combines the Pokémon names into a strategy prompt.
   - 1 point: Encourages creative prompt engineering.

4. **API Request (2 Points)**
   - 1 point: Sends a POST request to the Huggingface API with the correct headers and body.
   - 1 point: Logs the response to the console.

5. **Response Handling (2 Points)**
   - 1 point: Extracts relevant data from the API response.
   - 1 point: Updates the webpage to display the strategy.

**Total: 10 Points**