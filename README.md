# CoinCrush

CoinCrush is a cryptocurrency dashboard application that provides real-time data and analytics using the CoinGecko API. Built with React, the application leverages Google Charts and Coin Charts to display interactive and insightful visualizations.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)

---

## Introduction
CoinCrush is designed to help users track and analyze cryptocurrency trends with ease. The dashboard provides a clean and intuitive interface to view real-time data, historical trends, and market insights, making it an essential tool for cryptocurrency enthusiasts and investors.

---

## Features
- **Real-Time Data**: Fetch live cryptocurrency prices and market statistics using the CoinGecko API.
- **Interactive Charts**: Utilize Google Charts and Coin Charts for dynamic and customizable visualizations.
- **Search and Filter**: Search for specific cryptocurrencies and filter data by various metrics.
- **User-Friendly Interface**: Modern and responsive design for seamless user experience.
- **Historical Data Analysis**: View trends and analyze past performance of cryptocurrencies.

---

## Technologies Used
- **React**: For building the user interface and managing the component-based architecture.
- **CoinGecko API**: For fetching real-time cryptocurrency data and market statistics.
- **Google Charts**: For creating interactive and visually appealing charts.
- **CSS**: For styling and responsive design.
- **JavaScript (ES6+)**: For scripting and dynamic functionality.
- **Node.js & npm**: For managing dependencies and running the development server.

---

## Project Structure
The project is organized as follows:

```
CoinCrush/
├── src/
│   ├── components/           # React components for UI
│   │   ├── Navbar.js         # Navigation bar component
│   │   ├── Dashboard.js      # Main dashboard component
│   │   ├── Chart.js          # Chart rendering component
│   ├── utils/                # Utility functions
│   │   ├── api.js            # API calls to CoinGecko
│   │   ├── chartConfig.js    # Configuration for Google Charts
│   ├── styles/               # CSS and styling files
├── public/
│   ├── index.html            # Main HTML file
├── README.md                 # Documentation
├── package.json              # Project dependencies and scripts
├── .env                      # Environment variables (e.g., API key)
└── LICENSE                   # License file
```

---

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install the required packages.
   ```bash
   cd CoinCrush
   npm install
   ```

3. **Set Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variable:
     ```env
     REACT_APP_API_BASE_URL=https://api.coingecko.com/api/v3
     ```

4. **Start the Application**:
   Run the application in development mode.
   ```bash
   npm run dev
   ```

   The application will open in your default web browser at `http://localhost:5173`.

---

## Usage

1. **Navigate the Dashboard**:
   - View real-time prices and market statistics on the main dashboard.
   - Use the search bar to find specific cryptocurrencies.

2. **Interactive Charts**:
   - Click on a cryptocurrency to view detailed charts and historical data.
   - Customize the chart parameters (e.g., time range) for deeper insights.

3. **API Integration**:
   - The application fetches data directly from the CoinGecko API, ensuring accuracy and reliability.

4. **Customization**:
   - Modify `chartConfig.js` in the `utils` folder to adjust chart settings.
   - Update styling in the `styles` folder to change the UI appearance.

---

## Contributing

Contributions are welcome! If you have ideas to improve the dashboard or fix issues, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive messages.
4. Push your branch to your forked repository.
5. Submit a pull request for review.

---

Thank you for exploring CoinCrush! We hope this dashboard helps you make informed cryptocurrency decisions.

