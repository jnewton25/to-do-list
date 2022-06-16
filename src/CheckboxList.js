import React from "react";
import "./CheckboxList.css";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Checkbox,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CheckboxList() {
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			subheader={<ListSubheader>Tasks to be Completed</ListSubheader>}
		>
			{[0, 1, 2, 3].map((value) => {
				const labelId = `checkbox-list-label-${value}`;

				return (
					<ListItem
						key={value}
						secondaryAction={
							<IconButton edge="end" aria-label="comments">
								<DeleteIcon />
							</IconButton>
						}
						disablePadding
					>
						<ListItemButton
							role={undefined}
							onClick={handleToggle(value)}
							dense
						>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ "aria-labelledby": labelId }}
								/>
							</ListItemIcon>
							<ListItemText
								id={labelId}
								primary={`Line item ${value + 1}`}
								style={{ color: "#FFFFFF" }}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
}
