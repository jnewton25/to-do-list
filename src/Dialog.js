import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="logo"
				onClick={handleClickOpen}
			>
				<AddBoxIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Add Task</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Add a task to your to-do list
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Task"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Add</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
