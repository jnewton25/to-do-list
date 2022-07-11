import React from "react";
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
import "./check-box-list.css";

export const CheckboxList = (props) => {
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (item) => () => {
		const currentIndex = checked.indexOf(item);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(item);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
			subheader={<ListSubheader>Tasks To Be Completed</ListSubheader>}
		>
			{props.textList.map((item, i) => {
				return (
					<ListItem
						key={item.text}
						secondaryAction={
							<IconButton edge="end" aria-label="comments">
								<DeleteIcon
									onClick={() => {
										console.log(item.text);
										props.removeFromTextList(i);
									}}
								/>
							</IconButton>
						}
						disablePadding
					>
						<ListItemButton
							role={undefined}
							onClick={handleToggle(item.text)}
							dense
						>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={checked.indexOf(item.text) !== -1}
									tabIndex={-1}
									disableRipple
								/>
							</ListItemIcon>
							<ListItemText
								id={item.text}
								primary={item.text}
								style={{ color: "#FFFFFF" }}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};
