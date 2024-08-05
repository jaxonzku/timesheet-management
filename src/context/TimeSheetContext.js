import React, { createContext, useState, useEffect } from "react";
import { fetchProjects } from "../services/api";

export const TimesheetContext = createContext();

export const TimesheetProvider = ({ children }) => {
	const [selectedProject, setSelectedProject] = useState("");
	const [timesheetData, setTimesheetData] = useState({});
	const [open, setOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);

	const handleInputChange = (date, hours, project) => {
		setTimesheetData((prevData) => ({ ...prevData, [date]: [hours, project] }));
	};

	const handleOpen = (date) => {
		setSelectedDate(date);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedDate(null);
	};

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchProjects()
			.then((response) => setProjects(response.data))
			.catch((error) => console.error("Error fetching projects:", error));
	}, []);

	return (
		<TimesheetContext.Provider
			value={{
				selectedProject,
				setSelectedProject,
				timesheetData,
				setTimesheetData,
				handleInputChange,
				open,
				handleOpen,
				handleClose,
				selectedDate,
				projects,
			}}
		>
			{children}
		</TimesheetContext.Provider>
	);
};
