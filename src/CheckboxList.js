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

function CheckboxList({ setInput }) {
	const [checked, setChecked] = React.useState([0]);

	const [textList, setTextList] = React.useState([
		{ text: "Walk dog" },
		{ text: "Fold clothes" },
		{ text: "Go to the store at 4pm" },
	]);

	const handleAdd = (name) => {
		let listValue = { text: { name } };
		let arr = textList.concat(listValue);
		setTextList(arr);
	};

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
			{textList.map((item) => {
				return (
					<ListItem
						key={item.text}
						secondaryAction={
							<IconButton edge="end" aria-label="comments">
								<DeleteIcon />
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
}

export default CheckboxList;
