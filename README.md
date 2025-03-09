# NY Times Most Popular Articles App

## 🚀 Project Overview

This is a **React + Vite** web application that fetches and displays the **most popular articles** from the **New York Times API**. Users can click on an article to view additional details inline with a smooth transition effect. The app is styled with **Tailwind CSS** and follows best React practices.

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/nyt-articles-app.git
cd nyt-articles-app
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a `.env` file in the root directory and add your **NY Times API key**:

```sh
VITE_APP_API_KEY=your-nyt-api-key
```

**Get your API key from:** [NY Times Developer Portal](https://developer.nytimes.com/get-started)

### **4️⃣ Run the App**

```sh
npm run dev
```

Now, open your browser and visit **`http://localhost:5173`**.

---

## 🛠 Features

✅ Fetches most popular articles from the NY Times API
✅ Displays articles in a responsive grid layout
✅ Click on an article to expand and view details
✅ Smooth animations using Tailwind CSS
✅ Fully tested with **Vitest (Unit Tests)** & **Cypress (E2E Tests)**
✅ Error handling for API failures

---

## 📂 Project Structure

```
📦 nyt-articles-app
│── 📂 src
│   ├── 📂 components
│   │   ├── 📄 ArticlesList.jsx   # Fetches & displays articles
│   │   ├── 📄 ArticleItem.jsx    # Displays each article card
│   ├── 📂 test
│   │   ├── 📄 setup.js           # Test setup for Vitest
│   ├── 📄 App.jsx                # Main component
│   ├── 📄 main.jsx               # Renders React app
│── 📂 cypress
│   ├── 📂 e2e
│   │   ├── 📄 article.cy.js      # Cypress E2E tests
│── 📂 public
│── 📄 vite.config.js             # Vite configuration
│── 📄 package.json               # Dependencies
│── 📄 README.md                  # Documentation
```

---

## 🧪 Running Tests

### **Unit Tests (Vitest)**

```sh
npx vitest
```

Run tests in UI mode:

```sh
npx vitest --ui
```

### **E2E Tests (Cypress)**

```sh
npx cypress open
```

Run in headless mode:

```sh
npx cypress run
```

---

## 🛠 Technologies Used

- **React (Vite)** 🚀 - Fast frontend framework
- **Tailwind CSS** 🎨 - For beautiful UI styling
- **NY Times API** 📰 - Fetches real-time news articles
- **Vitest & React Testing Library** 🔍 - Unit Testing
- **Cypress** 🧪 - End-to-End Testing

---

## 🌍 Deployment Instructions (Optional)

If deploying to **Vercel**:

```sh
vercel deploy - https://ny-times-popular.vercel.app/
```

Ensure `.env` variables are set in your hosting provider.

---

## 👨‍💻 Author

- **Ammar Mahmood**
- [GitHub](https://github.com/AmmarMahmood7)

🚀 **Happy Coding!** 🎉
