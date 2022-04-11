
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../Sidebar/Navbar";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<div className={styles.main_container}>
        <>
			<Navbar />	
			<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				</>
		</div>
	);
};
export default Main;
