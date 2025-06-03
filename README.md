# 🧪 DMoney API Automation Test Suite

This project contains automated API tests for the **DMoney Users API** using [Postman](https://www.postman.com/) and [Newman](https://github.com/postmanlabs/newman), with HTML reporting via `newman-reporter-htmlextra`.




## 📁 Project Structure

```text
DMoneyWebVersal/
├── Reports/           # HTML Test Reports
├── collection/        # (Optional) Local Postman collection file
├── .env               # Environment secrets (excluded from Git)
├── report.js          # Newman automation runner
└── README.md          # This documentation file

```


## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Syeda-Somiya-Tasnim/DMoneyWebVersal.git
cd DMoneyWebVersal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory with the following content:

POSTMAN_COLLECTION_URL=https://api.postman.com/collections/33669534-xxxxxxxxxxxxxxxxxxxx?access_key=PMAT-xxxxxxxxxxxxxxxxxxxx
Note: The .env file is ignored by Git for security purposes (ensure it’s listed in .gitignore).

### 4. Run Tests
Run the tests with an HTML report:

```bash
node report.js
```

#### This will:

- Execute all Postman tests via Newman.
- Generate a detailed HTML report at ./Reports/report.html.
- Automatically open the report in your default browser.

## ✅ Features

- Execute all **Postman** tests via **Newman**.
- Generate a detailed **HTML report** at `./Reports/report.html`.
- Automatically **open the report** in your default browser.

---

## 🧪 Technologies Used

- 🔸 **Postman** – API development and testing
- 🔹 **Newman** – Command-line runner for Postman collections
- 📃 **newman-reporter-htmlextra** – Custom HTML reporting for Newman
- 🌐 **Node.js** – JavaScript runtime environment
- 🔐 **dotenv** – Secure environment configuration

---

## 📊 Sample Output (Report Screenshot)


![Dmoney-API-Results-06-03-2025_05_46_PM](https://github.com/user-attachments/assets/e5fd9b02-3c1e-4eed-8cdd-6428fdf8346b)


