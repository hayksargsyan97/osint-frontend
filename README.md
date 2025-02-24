# Osint Application

## Overview
The **Osint Application** is a React-based frontend that allows users to initiate and track domain scans. The application interacts with a backend API to start a scan for a given domain and fetch scan results.

## Features
- Start a new domain scan.
- Fetch a list of previous scans.
- Display scan details, including start time, end time, and results.

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (version 16 or later recommended)
- **npm** or **yarn** (Node Package Manager)
- A backend server running at `http://localhost:8080/api/scans`

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/hayksargsyan97/osint-frontend.git
   cd osint-frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
   or, if using yarn:
   ```sh
   yarn install
   ```

## Running the Application
### Start the Development Server
To run the React app in development mode, execute:
```sh
npm start
```
or, if using yarn:
```sh
yarn start
```
This will start the app and open it in your default browser at `http://localhost:3000/`.

### Running Tests
To execute unit tests, run:
```sh
npm test
```
or
```sh
yarn test
```

## Application Structure
```
.
├── src
│   ├── api.ts              # API calls for scanning operations
│   ├── App.tsx             # Main React component
│   ├── ScanList.tsx        # Component displaying a list of scans
│   ├── ScanCard.tsx        # Component displaying individual scan details
│   ├── Scan.ts             # TypeScript interface for scan objects
│   ├── index.tsx           # Entry point of the application
│   ├── styles.css          # Stylesheet for UI styling
│   ├── reportWebVitals.ts  # Performance monitoring
├── public                  # Static assets
├── package.json            # Project dependencies and scripts
├── README.md               # Documentation
```

## Usage
### Starting a Scan
1. Enter a domain in the input field.
2. Click the **Start Scan** button.
3. The scan request is sent to the backend, and the result appears in the list.

### Fetching Scans
- Click the **Fetch Scans** button to retrieve a list of all previous scans from the backend.

### Viewing Scan Details
Each scan displays:
- **Domain name**
- **Start time**
- **End time** (if completed)
- **Result** (if available)

## Configuration
If the backend API URL differs from `http://localhost:8080/api/scans`, update the `API_URL` in `api.ts`:
```ts
const API_URL = "http://localhost:8080/api/scans";
```

## Deployment
To build the project for production, run:
```sh
npm run build
```
or
```sh
yarn build
```
This will generate a `build/` folder containing the optimized static files, which can be deployed to a web server.