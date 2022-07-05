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
	Stack,
	AppBar,
	Toolbar,
	Typography,
	TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Navbar({ input }) {
	const [value, setValue] = React.useState("");
	const handleChange = (e) => {
		console.log(`Typed => ${e.target.value}`);
		setValue(e.target.value);
	};

	return (
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
					>
						<FactCheckIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						To-Do List
					</Typography>
					<Stack direction="row" spacing={2}>
						<TextField
							label="Create New Task"
							id="outlined-size-small"
							size="small"
							margin="dense"
							style={{ width: "15rem" }}
							value={value}
							onChange={handleChange}
						/>
						<IconButton
							size="large"
							edge="end"
							color="inherit"
							aria-label="logo"
							onClick={() => {
								alert(value);
							}}
						>
							<AddBoxIcon />
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>
		</div>
	);
}

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

export { Navbar, CheckboxList };
