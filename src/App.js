import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Questions from "./components/questions/Questions";
import AddQuestion from "./components/addQuestion/AddQuestion";
import AddAnswer from "./components/addAnswer/AddAnswer";
import Notifications from "./components/notifications/Notifications";
import Spaces from "./components/spaces/Spaces";
import { questionAndAnswers, questionLists } from "./data";
import { quesList, queAnsList } from "./getUser";
import "./styles/App.css";
import History from "./components/history/History";
import Cooking from "./components/cooking/Cooking";
import Music from "./components/music/Music";
import Science from "./components/science/Science";
import Health from "./components/health/Health";
import Movies from "./components/movies/Movies";

const App = () => {
  const [queAns, setQueAns] = useState(queAnsList || questionAndAnswers);
  const [ques, setQues] = useState(quesList || questionLists);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Login />,
    },
    {
      path: `/signup`,
      element: <Signup />,
    },
    {
      path: `/home`,
      element: <Home queAns={queAns} ques={ques} setQueAns={setQueAns} />,
    },
    {
      path: `/questions`,
      element: <Questions ques={ques} />,
    },
    {
      path: `/spaces`,
      element: <Spaces />,
    },
    {
      path: `/notifications`,
      element: <Notifications />,
    },
    {
      path: `/add-questions`,
      element: <AddQuestion ques={ques} setQues={setQues} />,
    },
    {
      path: `/add-answers`,
      element: <AddAnswer ques={ques} queAns={queAns} setQueAns={setQueAns} />,
    },
    {
      path: `/history`,
      element: <History />,
    },
    {
      path: `/cooking`,
      element: <Cooking />,
    },
    {
      path: `/music`,
      element: <Music />,
    },
    {
      path: `/science`,
      element: <Science />,
    },
    {
      path: `/health`,
      element: <Health />,
    },
    {
      path: `/movies`,
      element: <Movies />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
