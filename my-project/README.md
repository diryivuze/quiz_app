# Quiz Web App

This is a dynamic and interactive quiz web application built with React, Tailwind CSS, and Firebase. It allows users to take a computer-based quiz with multiple-choice and true/false questions. The app includes features like user authentication, countdown timer, randomized questions, and a final score display with motivational quotes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure login and signup with username, email, and mobile phone verification using Firebase.
- **Quiz Customization:** Users can select the number of questions and set a time limit for the quiz.
- **Randomized Questions:** Questions are randomized from a database of 100+ computer-based questions.
- **Question Types:** Includes multiple-choice and true/false questions.
- **Countdown Timer:** A timer to track the remaining time for the quiz.
- **Score Display:** Shows the final score and a motivational quote after submission.
- **Review Questions:** Option to view all questions and correct answers after the quiz.
- **Retry Option:** Users can retry the quiz or exit to the home screen.

## Tech Stack

- **Frontend:** React JS, Tailwind CSS
- **Database:** Firebase
- **Deployment:** Netlify

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diryivuze/quiz_app.git
   cd quiz-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project.
   - Enable Authentication and Firestore Database.
   - Add your Firebase configuration to `.env`:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and go to `[http://localhost:3000](http://localhost:5173/)`.
2. Sign up or log in using the default credentials (`Admin / Admin@123`).
3. Select the number of questions and set the quiz duration.
4. Answer the questions and submit to see your score and review correct answers.
5. Option to retry the quiz or view all questions and answers.

## Deployment

The app is deployed on Netlify for easy access:
- Visit the live demo: [IgaThrive Quiz App](https://igaquiz.netlify.app/)

To deploy your own version:
1. Connect your GitHub repository to Netlify.
2. Set up environment variables in Netlify's settings.
3. Build and deploy your app.

## Screenshots
![Macbook-Air-localhost (4)](https://github.com/user-attachments/assets/cebb1922-0039-4a83-95af-6527af2078c4)
![iPhone-14-Plus-localhost](https://github.com/user-attachments/assets/74585cd3-5612-4615-986f-75d556d78cd3)
![iPhone-13-PRO-localhost (2)](https://github.com/user-attachments/assets/b17ce21f-bddb-4206-90f4-866364bc2c12)
![iPhone-13-PRO-localhost (3)](https://github.com/user-attachments/assets/91e952bb-aae6-4740-84ab-3ca9fd183af9)
![Macbook-Air-localhost (5)](https://github.com/user-attachments/assets/716a4d6d-6161-45cf-883e-1d158a38a8ac)

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License
