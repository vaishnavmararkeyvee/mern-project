import { Route, Routes, Navigate } from "react-router-dom";
import Main from '../src/components/Main/index';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Addform from "./Pages/Addform";
import Task from "./Pages/Task";
import Timeentry from "./Pages/Timeentry";
import ProjectList from "./Pages/ProjectList";
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
		     <Route path="/PROJECT" element={<ProjectList />} />
			 <Route path="/TASK" element={<Task />} />
			 <Route path="/TIMEENTRY" element={<Timeentry />} />
		
			   </Routes>
			   </>
	);
}

export default App;
