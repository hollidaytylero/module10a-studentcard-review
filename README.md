# module10a-studentcard-review
# Module 10A – StudentCard Code Review

## Description
This is a React code review assignment. I reviewed the StudentCard component and added comments to 
explain the logic behind props, state, and interactivity.

## What I Learned
- How to use and identify props and state
- How toggle functionality works with useState
- How to better document and explain React components

## Screenshot
(Add a screenshot of the running component with your comments visible in the code editor)



INSTRUCTIONS
React code review assignment focused on understanding state and props through analyzing a pre-written component.

Learning Objectives
Practice reading and understanding JSX and React component structure
Identify how props and state are used in real-world components
Improve your ability to document and comment on code for collaboration
Reinforce best practices in component design, logic, and readability
Tutorial: Understanding State and Props in StudentCard
React components can accept inputs called props and manage their own internal data using state.

Props are passed into a component from its parent. These are like parameters that help configure how the component behaves or displays information.
State is data maintained inside the component. It can change over time, like showing or hiding extra information based on user interaction.
In this assignment, you'll review a component called StudentCard that:

Accepts props like name, major, bio, and image
Uses the useState hook to toggle whether a bio is shown
Renders a button that toggles the extra info when clicked
Assignment Overview
You are provided with a complete StudentCard.jsx React component that uses state and props. Your task is to carefully review the code and add inline comments explaining:

What each part of the code does
How props are being used
Where and how state is implemented
How the toggle functionality works
What You Will Receive
You’ll receive:

StudentCard.jsxDownload StudentCard.jsx (pre-written React component)
App.jsxDownload App.jsx (renders the StudentCard)
Your Tasks
1. Add Meaningful Comments
Open StudentCard.jsx and add clear comments:

At the top of the file, write a summary of what this component does
Above each important line or section, explain the code in plain English
Highlight state and props usage and explain their role
Include comments on how the useState hook works
2. Add a README.md to Your GitHub Repo
Create a README.md file with the following template:

# Module 10A – StudentCard Code Review

## Description
This is a React code review assignment. I reviewed the StudentCard component and added comments to 
explain the logic behind props, state, and interactivity.

## What I Learned
- How to use and identify props and state
- How toggle functionality works with useState
- How to better document and explain React components

## Screenshot
(Add a screenshot of the running component with your comments visible in the code editor)
Setup Instructions
Create your project with Vite:
npm create vite@latest module10a-studentcard-review -- --template react
Navigate to your project directory:
cd module10a-studentcard-review
Install dependencies:
npm install
Start the development server:
npm run dev
Add the StudentCard.jsx file and import it in App.jsx
Add your comments and README.md file
Take a screenshot of the component running and your comments in code
Submission Instructions
Upload files of your project to Canvas 
Submit the GitHub URL for your repo (named module10a-studentcard-review)
