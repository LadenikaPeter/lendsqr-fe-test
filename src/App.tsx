import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/Login";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <LoginPage /> }]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
