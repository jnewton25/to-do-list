import React from "react";
import {
	Stack,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	//Button
} from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FormDialog from "./Dialog";

const Navbar = () => (
	<div>
		<AppBar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="logo"
				>
					<FactCheckIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					To-Do List
				</Typography>
				<Stack direction="row" spacing={2}>
					<FormDialog />
				</Stack>
			</Toolbar>
		</AppBar>
	</div>
);

export default Navbar;
