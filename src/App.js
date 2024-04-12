import CreateAcc from "./Pages/createAcc";
import Home from "./Pages/home";
import QuestionPage from "./Pages/question";
import Signup from "./Pages/signup";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/acc",
      element: <CreateAcc />
    },
    {
      path: "/ques",
      element: <QuestionPage />
    },
    {
      path: "/home",
      element: <Home />
    },
  ]);
  return (
    // <div>
    //   <Signup />
    //   {/* <CreateAcc /> */}
    //   {/* <QuestionPage /> */}
    //   {/* <Home /> */}
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
