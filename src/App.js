import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AddQuestion from './components/addQuestion/AddQuestion';
import AddAnswer from './components/addAnswer/AddAnswer';
import { questionAndAnswers, questionLists } from './data';
import { quesList, queAnsList } from './getUser';
import './styles/App.css';


const App = () => {
  const [queAns, setQueAns] = useState(queAnsList || questionAndAnswers);
  const [ques, setQues] = useState(quesList || questionLists);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Login />
    },
    {
      path: `/signup`,
      element: <Signup />
    },
    {
      path: `/home`,
      element: <Home queAns={queAns} ques={ques} />
    },
    {
      path: `/add-questions`,
      element: <AddQuestion ques={ques} setQues={setQues} />,
    },
    {
      path: `/add-answers`,
      element: <AddAnswer ques={ques} queAns={queAns} setQueAns={setQueAns} />
    },
  ]);


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
