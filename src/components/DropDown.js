import React, { useContext } from "react";
import { TimesheetContext } from "../context/TimeSheetContext";

const Dropdown = ({ onSelect }) => {
	const { projects } = useContext(TimesheetContext);

	return (
		<div className="dropdown-container">
			<select
				onChange={(e) => onSelect(e.target.value)}
				className="dropdown-select"
			>
				<option value="">Select a project</option>
				{projects.map((project) => (
					<option key={project.id} value={project.id}>
						{project.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
