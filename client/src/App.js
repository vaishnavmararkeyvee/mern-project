import { Route, Routes, Navigate } from "react-router-dom";
import Main from '../src/components/Main/index';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Addform from "./Pages/Addform";
import Task from "./Pages/Task";
import Timeentry from "./Pages/Timeentry";
import ProjectList from "./Pages/ProjectList";
import EmailVerify from "./components/Emailverify/Email";
import ForgotPassword from "./components/Forgot/forgot";
import PasswordReset from "./components/PasswordReset/Reset";
import CardLayout from "./Pages/CardLayout";
function App() {
	 const user = localStorage.getItem("token");
	return (
         <>
		 {/* <Navbar /> */}
	 	<Routes>
		    {user && <Route path="/" exact element={<Main />} />}
	 	    <Route path="/signup" exact element={<Signup />} />
	      <Route path="/login" exact element={<Login />} />
	 	 	<Route path="/" element={<Navigate replace to="/login" />} />
			  <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
		     <Route path="/PROJECT" element={<CardLayout />} />
			 <Route path="/TASK" element={<Task />} />
			 <Route path="/TIMEENTRY" element={<Timeentry />} />
		
			   </Routes>
			   </>
	);
}

export default App;
