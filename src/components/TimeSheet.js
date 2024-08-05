import React from "react";
import CalenderComp from "./CalenderComp";
import PopUp from "./PopUp";
import { Grid } from "@mui/material";
import "../App.css";

const TimesheetForm = () => {
	return (
		<Grid
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: 10,
			}}
		>
			<CalenderComp />
			<PopUp />
		</Grid>
	);
};

export default TimesheetForm;
