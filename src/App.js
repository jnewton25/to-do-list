import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./CheckboxList.css";
import Navbar from "./Navbar";
import CheckboxList from "./CheckboxList";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [input, setInput] = React.useState("");

	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<Navbar input={input} />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					backgroundColor: "#181818",
				}}
			>
				<CheckboxList setInput={setInput} />
			</div>
		</ThemeProvider>
	);
}

export default App;
