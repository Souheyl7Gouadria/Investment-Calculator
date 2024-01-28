Investment Calculator

This React application serves as an investment calculator, allowing users to input their current savings, yearly contribution, expected return on investment, and the investment duration. The app then calculates and displays the projected savings over each year based on the provided inputs.

Getting Started
Follow these steps to run the application locally:

Clone the repository:

Copy code
git clone https://github.com/your-username/investment-calculator.git
Navigate to the project directory:

Copy code
cd investment-calculator
Install dependencies:

Copy code
npm install
Run the application:

Copy code
npm start
Open your browser and visit http://localhost:3000 to view the application.

Usage
Enter your current savings, yearly contribution, expected return on investment (as a percentage), and the investment duration.
Click the "Calculate" button to see the projected savings over each year.
The results are displayed in a table format, showing yearly interest, total savings, and yearly contribution.
Code Structure
The main logic of the application is implemented in App.js. Here's a brief overview of the key components:

UserInput: This component takes user input for current savings, yearly contribution, expected return, and duration. It triggers the calculation process when the "Calculate" button is clicked.

Table: Displays the calculated results in a table format. It shows yearly interest, total savings, and yearly contribution.

Home: Represents the home section of the application, providing a clean and organized layout.
