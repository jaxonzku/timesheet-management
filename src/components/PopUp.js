import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, TextField, Button } from "@mui/material";
import { TimesheetContext } from "../context/TimeSheetContext";
import "../App.css";
import Dropdown from "./DropDown";
import { submitTimesheet } from "../services/api";

const PopUp = () => {
	const {
		open,
		handleClose,
		handleInputChange,
		selectedDate,
		setSelectedProject,
		selectedProject,
		timesheetData,
	} = useContext(TimesheetContext);
	const [hours, setHours] = useState("");

	const handleSubmit = () => {
		submitTimesheet({
			project_id: selectedProject,
			timesheet: timesheetData,
		})
			.then((response) => {
				alert("Timesheet submitted successfully!");
			})
			.catch((error) => {
				console.error("Error submitting timesheet:", error);
			});
		if (selectedDate) {
			handleInputChange(selectedDate, hours, selectedProject);
		}
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="parent-modal-title"
			aria-describedby="parent-modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					pt: 2,
					px: 4,
					pb: 5,
					borderRadius: 10,
				}}
			>
				<h2 className="modal-title" id="parent-modal-title">
					Add Work Hours
				</h2>

				<Dropdown onSelect={setSelectedProject} />

				<TextField
					label="Hours"
					type="number"
					value={hours}
					onChange={(e) => setHours(e.target.value)}
					fullWidth
					sx={{ marginBottom: 2 }}
				/>

				<Button
					onClick={handleSubmit}
					variant="contained"
					disabled={selectedProject !== "" && hours !== "" ? false : true}
				>
					Submit
				</Button>
			</Box>
		</Modal>
	);
};

export default PopUp;
