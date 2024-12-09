# Digital Watch

## Overview
Digital Watch is an interactive web-based project built using HTML, CSS, and JavaScript. It provides users with three functional pages:

1. **Digital Watch**: Displays the current time, date, and day.
2. **Stopwatch**: Allows users to measure time intervals with options to start, stop, and reset the timer.
3. **Timer Watch**: Lets users set a countdown timer with a custom alert and sound notification when time is over.

This project is a responsive website. 
### [Live Preview](https://kotiyauday.github.io/DigitalWatch/)

---

## Features

### 1. Digital Watch
- Displays the current **time**, **date**, and **day** dynamically updated in real-time.
- User-friendly interface with modern styling.

### 2. Stopwatch
- Start, stop, and reset functionality.
- Clean and intuitive buttons for easy use.
- Precision time measurement displayed in hours, minutes, seconds, and milliseconds.

### 3. Timer Watch
- Allows the user to set a custom countdown timer.
- Plays an alert sound when the timer ends.
- Custom alert box appears when the timer ends, prompting the user to acknowledge.
- Sound pauses upon clicking the "OK" button in the custom alert box.

---

## Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout.
- **JavaScript**: Functionality and interactivity.

---

## How to Run
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/KotiyaUday/DigitalWatch.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DigitalWatch
   ```
3. Open the `index.html` file in your web browser.

---

## Project Structure
```
Digital Watch/
├── index.html       # Main landing page for the Digital Watch
├── stopwatch.html   # Stopwatch page
├── timer.html       # Timer page
├── CSS/
│   ├── style.css     # Common styles
│   ├── stop.css# Stopwatch-specific styles
│   ├── timer.css    # Timer-specific styles
├── JS/
│   ├── script.js      # Digital Watch functionality
│   ├── stop.js # Stopwatch functionality
│   ├── timer.js     # Timer functionality
└── Audio/
    └── alertSound.mp3 # Sound played when timer ends
```

---

## Usage
1. Open the `index.html` file to access the Digital Watch.
2. Navigate to the **Stopwatch** or **Timer** page via the navigation links.
3. Use the features as described:
   - For the **Stopwatch**, start and stop the timer and reset it when needed.
   - For the **Timer**, set your desired time, and wait for the alert sound and notification.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push to your fork.
4. Open a pull request with a description of your changes.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- JavaScript for its robust functionalities.
- Web community for tutorials and resources.
