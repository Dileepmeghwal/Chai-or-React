import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { useState } from "react";
import { MyContext } from "./MyContext";
import Calculator from "./Calculator";
import Product from "./Product";
import Shop from "./ShopingApp";
import ShopingApp from "./ShopingApp";
import StoreApp, { MyComponents } from "./StoreApp";
import Teacher from "./Teacher";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoApp from "./TodoApp/TodoApp";
import Parent from "./useCallback/Parent";
// import Sidebar from "./sidebar";
import { DarkModeProvider, useDarkMode } from "./Context/DarkModeContext";
import Card from "./Card/Card";
import Counter from "./useCallback/Counter";
import Sidebar from "./Sidebar/Sidebar";
import CounterApp from "./useCallback/CounterApp";
import ApiProduct from "./Card/ApiProduct";
import DateTime from "./Date/DateTime";
import CrudApp from "./Crud/CrudApp";
import UserList from "./Blog/UserList";
import DummyDataPagination from "./Pagination/DummyDataPagination";
import String from "./Blog/String";
import ComplexCalculation from "./useCallback/ComplexCalculation";
import { CounterProvider } from "./Context/CounterContext";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Forgot from "./Forgot";
import { ThemeProvider } from "./Context/ThemeContext";
import CounterProject from "./useCallback/one/CounterProject";
import Library from "./Library/Library";

function App() {
  const [text, setText] = useState("");

  const user = {
    name: "admin",
    isLoggedIn: false,
  };

  return (
    <div>
      <MyContext.Provider value={{ text, setText, user }}>
        {/* <MyComponent data={user}/> */}
        {/* <Calculator/> */}
        {/* <Product/> */}
      </MyContext.Provider>
      {/* <ShopingApp /> */}
      {/* <StoreApp /> */}
      {/* <CounterProvider>
        <Teacher />
        
        <ComplexCalculation />
      </CounterProvider> */}
      {/* <Form/> */}
      {/* <Todo/> */}
      {/* <TodoList/> */}
      {/* <TodoApp/> */}
      {/* <Parent/> */}

      {/* <DarkModeProvider>
        <Sidebar />
      </DarkModeProvider> */}
      {/* <DarkModeProvider>
        <Card />
      </DarkModeProvider> */}

      {/* <Counter/> */}
      {/* <CounterApp/> */}
      {/* <ApiProduct/> */}

      {/* <DateTime/> */}
      {/* <CrudApp/> */}
      {/* <UserList /> */}
      {/* <DummyDataPagination /> */}
      {/* <String initialValue={100} /> */}

      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/forgot" Component={Forgot} />
        <Route path="/user-list" Component={UserList} />
        <Route path="/todoApp" Component={TodoList} />
        <Route path="/counter" Component={Counter} />
        <Route path="/api" Component={ApiProduct} />
        <Route path="/shop" Component={Shop} />
        <Route path="/shopping" Component={ShopingApp} />
        <Route path="/crud" Component={CrudApp} />
        <Route path="/todo-one" Component={Todo} />
        <Route path="/todo-app" Component={TodoApp} />
        <Route path="/pagination" Component={DummyDataPagination} />

        <Route path="/store" Component={MyComponents} />
        <Route path="/useCallback" Component={CounterProject} />
        <Route path="/library" Component={Library} />
        <Route path="/sidebar" Component={Sidebar} />
      </Routes>
    </div>
  );
}

export default App;
