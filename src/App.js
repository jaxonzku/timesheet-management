import React from "react";
import { TimesheetProvider } from "./context/TimeSheetContext";
import TimesheetForm from "./components/TimeSheet";
import "./App.css";

const App = () => {
	return (
		<TimesheetProvider>
			<TimesheetForm />
		</TimesheetProvider>
	);
};

export default App;

