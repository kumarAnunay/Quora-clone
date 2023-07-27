import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import CreateSpace from "./components/createSpace/CreateSpace";
import Home from "./components/home/Home";
import Questions from "./components/questions/Questions";
import AddQuestion from "./components/addQuestion/AddQuestion";
import AddAnswer from "./components/addAnswer/AddAnswer";
import Notifications from "./components/notifications/Notifications";
import Spaces from "./components/spaces/Spaces";
import {
  questionAndAnswers,
  questionLists,
  history,
  science,
  movies,
  health,
  music,
  cooking,
} from "./data";
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
  const [historyQue, setHistoryQue] = useState(history);
  const [cookingQue, setCookingQue] = useState(cooking);
  const [musicQue, setMusicQue] = useState(music);
  const [scienceQue, setScienceQue] = useState(science);
  const [healthQue, setHealthQue] = useState(health);
  const [moviesQue, setMoviesQue] = useState(movies);

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
      path: `/create-space`,
      element: <CreateSpace />,
    },
    {
      path: `/history`,
      element: (
        <History historyQue={historyQue} setHistoryQue={setHistoryQue} />
      ),
    },
    {
      path: `/cooking`,
      element: (
        <Cooking cookingQue={cookingQue} setCookingQue={setCookingQue} />
      ),
    },
    {
      path: `/music`,
      element: <Music musicQue={musicQue} setMusicQue={setMusicQue} />,
    },
    {
      path: `/science`,
      element: (
        <Science scienceQue={scienceQue} setScienceQue={setScienceQue} />
      ),
    },
    {
      path: `/health`,
      element: <Health healthQue={healthQue} setHealthQue={setHealthQue} />,
    },
    {
      path: `/movies`,
      element: <Movies moviesQue={moviesQue} setMoviesQue={setMoviesQue} />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
