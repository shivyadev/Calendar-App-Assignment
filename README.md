# 📝 Task Manager App

A modern React application that helps you manage and categorize your daily tasks using a calendar view, modal-based forms, and visual insights through charts. Built with Ant Design, Redux Toolkit, Formik, and Recharts.

---

## 📸 Project ScreenShots

![Project Screenshot - Analysis](src\assets\calendar-main-tab.png)
![Project Screenshot - Analysis](src\assets\calendar-graph-tab.png)

---

## 🚀 Features

- 📅 **Calendar View**  
  View tasks organized by date using Ant Design’s `<Calendar />`. Click on any date to add/view tasks.

- 📝 **Add/Edit Tasks**

  - Formik-based modal with validation using Yup
  - Fields: `Title`, `Description`, `Category`, and auto-filled `Date`
  - Category options: `Success`, `Warning`, `Issue`, `Info`

- 📋 **Task List**

  - Displays tasks for the selected date
  - Edit/Delete functionality
  - Category visualized using Ant Design `Tag` components

- 📊 **Chart Visualization**

  - Bar or Pie chart of task counts per category
  - Filter by category with `Apply` and `Reset` options

- ⚙️ **State Management**
  - Fully managed via Redux Toolkit
  - Task state organized by date for optimized lookups
  - Selected date tracked globally

---

## 🛠 Tech Stack

| Tech          | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| React         | Used to build dynamic and reusable UI components     |
| Tailwind CSS  | For styling layout and spacing using utility classes |
| Ant Design    | Pre-styled UI Components                             |
| Redux Toolkit | Global State Management                              |
| React-Redux   | Binding Redux to React                               |
| Formik        | Form State Management                                |
| Yup           | Form Validation                                      |
| Recharts      | Data Visualization                                   |
| Day.js        | Date Formatting and Parsing                          |

## 📦 Installation

```bash
git clone https://github.com/shivyadev/Calendar-App-Assignment.git
cd Calendar-App-Assignment
npm install
```

## 🚧 Usage

```bash
npm run dev
```

Then press **Ctrl + click** on the provided link.
