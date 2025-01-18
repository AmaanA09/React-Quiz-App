import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage"
import QuizPage from "./pages/Quizpage"
import ScoreBoardPage from "./pages/ScoreBoardPage"
import { Provider } from "react-redux";
import store from "./store/store";

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
    </Routes>
    </Provider>
    </>
  )
}

export default App
