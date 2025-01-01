# To-Do List App Documentation
==========================
## Live Link: 
https://to-do-list-ruddy-one-93.vercel.app/

## Live GitHub: 
https://github.com/waduzzaman/to-do-nextjs

## Overview
This To-Do List application is built using [Next.js](https://nextjs.org) and allows users to create, update, and delete tasks with start and end dates. Tasks are stored in the browser's local storage, so they persist even after the app is closed and reopened.

## Features
- **Task Creation**: Users can add tasks by providing a task name, a start date, and an expected end date.
- **Task Editing**: Users can edit a previously added task's details.
- **Task Deletion**: Users can mark tasks as deleted, which will visually strike through the task.
- **Persistent Data**: Tasks are saved in the browser's local storage, ensuring that data is retained across sessions.
- **Responsive Design**: The app is designed to work across various devices with a clean and modern interface.

## Functional Components

### Task Input
- Users can input the task name and it will be added to the task list.
- An optional edit mode is enabled when editing an existing task, allowing users to update the task name.

### Date Inputs
- **Start Date**: Users can pick a date and time indicating when the task should start.
- **End Date**: Users can pick a date and time indicating when the task is expected to be completed.

### Buttons
- **Add/Update Button**: The button's label toggles between "Add" and "Update" based on whether the user is adding a new task or editing an existing one.

### Task List
- Displays all tasks, including their names, start, and end dates.
- Tasks that are marked as deleted appear crossed out and have a grey color.
- Each task has an Edit button and a Delete checkbox to allow for task modifications and deletion toggling.

### Local Storage
- The tasks are stored in `localStorage`, so the list persists between app reloads.

## How to Use

### Add Task:
1. Enter the task name.
2. Select a start date and an end date.
3. Click **Add** to add the task to the list.

### Edit Task:
1. Click **Edit** next to the task you want to update.
2. The task details will populate in the input fields, where you can modify them.
3. Click **Update** to save the changes.

### Delete Task:
1. Mark the checkbox next to the task to mark it as deleted.
2. The task will appear crossed out to indicate that it's deleted.

### Persisting Tasks:
- The tasks are automatically saved in the browser's local storage, meaning they will be available even if the app is closed and reopened.

## Installation and Setup

1. Clone or download the repository.
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Run the app using:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Technologies Used
- **Next.js**: For building the app's UI and managing state.
- **TailwindCSS**: For styling the app with a clean, modern, and responsive design.
- **LocalStorage**: For persisting task data.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Conclusion
This To-Do List app is a simple yet functional tool for task management. It provides an intuitive interface for adding, editing, and deleting tasks, with persistent storage to ensure that your tasks are always available when you need them.
