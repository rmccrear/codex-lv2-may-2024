Here’s the completed assignment outline for your project:

---

## Project Overview

You will create a multi-page web application that consumes an external API and optionally integrates a (free) AI from Hugging Face or a paid AI from a provider such as OpenAI. The app will persist user data across sessions using `localStorage` and will include three pages: a splash page, an about page, and a main content page that interacts with the API. The project must be responsive and feature well-organized, clean code.

---

## Requirements Breakdown

### Splash Page (10%)

- Create an attractive landing page with a large hero image.
- Use external CSS or Bootstrap classes and IDs for styling.
- The splash page should introduce the app and have a clear call-to-action button to enter the main content.
- Include an explanation of your app and what problem it solves for users.
- Optional: Have a popup or fourth page with a "login" form to collect data and save it to localStorage.

### About Page (10%)

- Include your personal bio and a professional photo.

- Use appropriate formatting for text and image presentation.

- Link to your LinkedIn profile and other social media links.

### Main Page/API Interaction (30%)

- Use `fetch` to call an external API.
- Use async functions and await to deal with asynchronous `fetch` calls.
- Use factory functions to convert the data from the API to more manageable objects for use in your app.
- Dynamically display the API data on the page, using methods like lists or cards for layout.
- Optional: Store data retrieved from the API using `localStorage`.
- Optional: Include a free AI from Hugging Face or a paid one (e.g., OpenAI) to enhance the data or functionality.

### LocalStorage (10%)

- At least one user input should be are saved to localStorage. Optionally, save more information such as fetched data so the user doesn't lose data when navigating away from the page. (5-10 points)
- On returning to the app, users should see saved state restored (e.g., data from a previous session is still visible).

### CSS/Bootstrap (20%)

- Apply styles consistently across the pages using CSS and Bootstrap for a polished, responsive design.
- Utilize grid systems (`col` `row`) and media queries (classes like `row-lg-4` or `row-md-3`) to ensure a responsive layout on different screen sizes.

### Code Style (10%)

- Ensure clean code that follows linting rules, is well-indented, and free of unused variables.
- Use meaningful variable names and comments where appropriate.

### Git Workflow (10%)

- Use Git branching for development. Use these steps for the example of a branch called `splash-page`.
  - `git branch splash-page` # to create a branch called `splash-page`
  - `git switch splash-page` # switch to the new branch
  - `git push origin splash-page` # push to the branch on GitHub
  - On the GitHub website, create a Pull Request from your branch.
- Try to create a new branch and a Pull Requests (PR) for each major step of your project.

---

### Submission Instructions

- README with your wire frame.
- Provide a link to the GitHub repository containing the project code.
- Include detailed commit messages and follow the pull request process as outlined in the requirements.
