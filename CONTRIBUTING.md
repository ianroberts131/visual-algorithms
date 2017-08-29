# Contributing to Visual Algorithms

Thank you for your interest in contributing to [Visual Algorithms](http://visual-algorithms.surge.sh/)! The following guide is meant to help you get started.

## Forking and Cloning this Repository

1. Click on the 'Fork' button at the top right corner of this page. This will allow you to have your own copy of this repository available on your GitHub account.
2. Go to the forked repository page on your GitHub account.
3. Click on the green 'Clone or download' button and copy the link.

   Your link will look like `https://github.com/<your_username>/visual-algorithms.git`.
   Be sure to use the HTTPS link.
4. Open a terminal on your system and move to the directory where the repository should be located.
5. Run `git clone <paste link here>`. You should now have a local copy of the forked repository.
6. `cd` into the repository
7. Run `git remote add upstream https://github.com/ianroberts131/visual-algorithms.git`. This will allow you to keep your forked copy up-to-date with any changes that are made.

   Run `git remote -v` to check if both the repositories are listed.
8. Now you can make changes to your local repository, commit them, and submit a pull request

## Finding an Issue

To work on a known issue, take a look through the existing [issues](https://github.com/ianroberts131/visual-algorithms/issues) and find 1 that seems interesting and matches your skill level. Each issue is tagged in the following way:
1. Type (either 'Feature' or a 'Bug'). A 'Feature' is something completely new to be added to Visual Algorithms. A 'Bug' is some unwanted action with the site as is that needs to be corrected.
2. Priority (Low, Medium, or High)
3. Other (beginner friendly, help wanted, etc.)


Once you find an issue that seems interesting, please write a comment stating that you plan to work on that issue, and confirm that nobody else is currently working on it. The last thing we want is for you to waste time on work that ultimately won't be used. Once confirmed, you will be listed as the assignee for that issue.

If you want to work on an issue that isn't listed, please create a new issue by clicking the green 'New issue' button at the top right-hand corner. Once you click on the button, a template will open up that shows the format to follow for either a bug or a feature. Please follow this format when filing a new issue. Do not begin working on an issue until it is confirmed that the bug/feature needs to be addressed.

## Making a contribution
Take a look at [this guide](https://github.com/asmeurer/git-workflow) for instructions on proper git workflow and how to submit a pull request.

## Style Guide
- Two spaces for indentation
- Prefer { this } to {this} when writing JSX
- a === b, not a===b
- Try to generally follow the conventions you see in the source code already

## File Structure
Files are generally organized into 4 separate folders:
- Components: Houses all of the individual React components
- Pages: Each page you see has its own file within this folder
- Actions: All Redux action creators are stored here
- Reducers: Where state is managed - each piece of state has its own file here

We like to keep associated css files in the same folder as the accompanying component, since it makes it easier to see what the css is actually styling.
