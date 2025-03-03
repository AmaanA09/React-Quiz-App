import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage"
import QuizPage from "./pages/Quizpage"
import ScoreBoardPage from "./pages/ScoreBoardPage"
import { Provider } from "react-redux";
import store from "./store/store";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage";
import UsersPage from "./pages/Admin/UsersPage";
import QuizQuestionPage from "./pages/Admin/QuizePage";
import UserTestListPage from "./pages/Admin/UserTestListPage";
import UserHistoryPage from "./pages/Admin/UserHistoryPage";
import AddNewQuizePage from "./pages/Admin/AddNewQuizPage";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";

function App() {

  return (
    <>
    <Provider store = {store}>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>
      <Route path="/scoreboard" element={<ScoreBoardPage/>}/>
      <Route path="/admindashboard" element={<AdminDashboardPage/>}/> 
      <Route path="/quizquestions" element={<QuizQuestionPage/>}/>
      <Route path="/addnewquiz" element={<AddNewQuizePage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/adminlogin" element={<AdminLoginPage/>}/>
      <Route path="/userHistory/:index/:name/:email" element={<UserHistoryPage/>}/>
      <Route path="/userTestList/:index/:name/:email" element={<UserTestListPage/>}/>
    </Routes>
    </Provider>
    </>
  )
}

export default App
