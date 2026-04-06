
# 📦 Redux Counter App
A simple counter application built with React + Redux to learn state management concepts.

## 🚀 Features
* ➕ Increment counter
* ➖ Decrement counter
* 🔄 Reset counter
* 🧠 Global state management with Redux

## 🛠️ Tech Stack
* React
* Redux Toolkit
* React-Redux
* JavaScript (ES6+)

## 📁 Project Structure

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── counter/
 │         ├── counterSlice.js
 │         └── Counter.jsx
 ├── App.js
 └── main.jsx
```

## ⚙️ Installation
Clone the project:

```bash
git clone https://github.com/your-username/redux-counter-app.git
```

Go to project folder:

```bash
cd redux-counter-app
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

## 🧠 Redux Concept Used
* Store → holds global state
* Slice → contains reducers + actions
* useSelector → read state
* useDispatch → send actions

## 📌 Example Counter Slice

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

## 🎯 Learning Goal
This project helps understand:
* How Redux replaces props drilling
* Centralized state management
* Actions & reducers flow

## 📄 License
Free to use for learning purposes.
