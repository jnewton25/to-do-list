import React from "react";
import { IconButton, Stack, AppBar, Toolbar, Typography, TextField,} from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./navbar.css";

export const Navbar = (props) => {
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
								console.log(value)
								props.addToTextList({text: value})
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
