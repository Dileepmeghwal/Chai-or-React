import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { useState } from "react";
import { MyContext } from "./MyContext";
import Calculator from "./Calculator";
import Product from "./Product";
import Shop from "./ShopingApp";
import ShopingApp from "./ShopingApp";
import StoreApp from "./StoreApp";
import Teacher from "./Teacher";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoApp from "./TodoApp/TodoApp";
import Parent from "./useCallback/Parent";
import Sidebar from "./sidebar";
import { DarkModeProvider, useDarkMode } from "./Context/DarkModeContext";
import Card from "./Card/Card";
import Counter from "./useCallback/Counter";
import CounterApp from "./useCallback/CounterApp";
import ApiProduct from "./Card/ApiProduct";
import DateTime from "./Date/DateTime";
import CrudApp from "./Crud/CrudApp";
import UserList from "./Blog/UserList";
import DummyDataPagination from "./Pagination/DummyDataPagination";
import String from "./Blog/String";
import ComplexCalculation from "./useCallback/ComplexCalculation";
import { CounterProvider } from "./Context/CounterContext";

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
        <String initialValue={100} />
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
      <UserList />
      {/* <DummyDataPagination /> */}
    </div>
  );
}

export default App;
