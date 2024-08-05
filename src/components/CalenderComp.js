import React, { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TimesheetContext } from "../context/TimeSheetContext";
import { Grid, Typography } from "@mui/material";

const CalenderComp = () => {
	const { handleOpen, timesheetData, projects } = useContext(TimesheetContext);

	const renderTileContent = ({ date, view }) => {
		if (view === "month") {
			const dateStr = date.toString();
			const cellData = timesheetData[dateStr];
			console.log("timesheetData", timesheetData);

			if (cellData) {
				const project = projects.find((el) => el.id === cellData[1]);
				return (
					<Grid
						sx={{
							background: "green",
							marginLeft: 3,
							borderRadius: 2,
							padding: 1,
						}}
					>
						<Typography
							fontSize={15}
							color={"white"}
						>{`Hours: ${cellData[0]}`}</Typography>
						<Typography fontSize={15} color={"white"}>
							{" "}
							{`${project ? project.name : "Unknown Project"}`}
						</Typography>
					</Grid>
				);
			}

			return null;
		}
	};
	return (
		<Calendar
			className="react-calendar"
			defaultValue={new Date(2017, 0, 1)}
			activeStartDate={new Date(2025, 4, 1)}
			minDate={new Date(2025, 4, 1)}
			maxDate={new Date(2025, 4, 31)}
			maxDetail="month"
			minDetail="month"
			showNavigation={true}
			onClickDay={(day) => {
				handleOpen(day);
			}}
			tileContent={renderTileContent}
		/>
	);
};

export default CalenderComp;
