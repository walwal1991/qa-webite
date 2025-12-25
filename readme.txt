QA Automation Practice Platform – A full-stack web app for testing user authentication, API validation, and UI flows.
## 🚀 Live Demo
https://qa-webite.vercel.app

## 🛠 Tech Stack
- Frontend: React, CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Deployment: Vercel (frontend), Render (backend)

## 🔍 What This Project Demonstrates
- REST API testing with Postman
- FRONTEND automation testing with cypress
  **Testing Tools:** 
  - Cypress (E2E / UI testing)
  - Postman (API testing)
- Authentication & authorization flows
- Error handling and validation
- Environment variables & deployment configuration
- CORS handling between frontend and backend
This project covers both **manual and automated testing** of a full-stack application.
This is how you connect the project to QA / automation roles.

## 🧠 Lessons Learned
- Handling CORS issues between Vercel and Render
- Managing environment variables securely
- Debugging deployment-only bugs

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB ( Atlas)
- Postman (for API testing)
Install dependencies:
npm install
Start the backend server:
npm run server
Start the frontend:
npm start

Cypress Testing (Frontend)
Run Cypress Tests
npx cypress open
This opens the Cypress Test Runner.
Select a test file to run E2E tests in the browser.
Test Coverage
Login & Registration
Search Functionality
Form Submissions
Sample Test Screenshot

Postman Testing (Backend API)
Run Postman Collection
Open Postman.
Import the QA_Automation.postman_collection.json from this repo.
Run the collection using the Runner.
Tested API Endpoints
POST /api/register — Create a new user
POST /api/login — User authentication
GET /api/search — Search functionality
Sample Test Result

Including screenshots or GIFs of your Cypress test runs.
Including Postman test results (like status codes, response snapshots, or exported collection runs).
Adding a brief explanation of the testing workflow.
Optionally, linking to a short video demo of the tests running.



