# Weather App

A simple web-based weather application that allows users to fetch current weather data for any city using the OpenWeatherMap API. The application features a user-friendly interface with input validation and error handling.

## Features

- Fetches real-time weather data using OpenWeatherMap API.
- Displays city name, weather condition, and temperature.
- User-friendly interface with form validation.
- Design with visually appealing styles.

## Demo

![Weather App Screenshot](/ScreenShots/Screenshot-1.png)
![Weather App Screenshot](/ScreenShots/Screenshot-2.png)

## Getting Started

### Prerequisites

To run this application, you need:

- A modern web browser (Google Chrome, Firefox, Safari, etc.)
- An active internet connection for API requests.

### Installation

1. Clone the repository:

   ```bash
      https://github.com/Praveen-kumar-DeV/Weather-Application.git
   ```

2. Navigate to the project folder:

   ```bash
      cd Weather-Application
   ```

3. Open `index.html` in your browser.
   #### File Structure
   ```bash
     weather-app/
         ├── index.html        # Main HTML file
         ├── styles.css        # CSS for styling
         ├── script.js         # JavaScript for functionality
         └── README.md         # Project documentation
   ```

### API Key

This project uses the OpenWeatherMap API to fetch weather data. To use the app:

1.  Generate your own API key by signing up at the OpenWeatherMap API website.
2.  `` javascript const apiUrl = \`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric\`;  ``
3.  javascriptCopy codeconst apiKey = "your-api-key-here";Example of an API key: 34e80a02ecae410460d37860ded6e2da. **Do not use this example key; generate your own from the above link.**

## Usage

1.  Enter the name of a city in the input field.
2.  Click the **Get Weather** button.
3.  View the weather information displayed below the input field.
4.  Errors, such as invalid city names, are displayed prominently.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## Contribution

Feel free to contribute! Fork the repository, make changes, and submit a pull request.
