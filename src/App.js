import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { CheckboxList } from "./components/check-box-list/check-box-list";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [input, setInput] = React.useState("");
	const [textList, setTextList] = React.useState([
		{ text: "Walk dog" },
		{ text: "Fold clothes" },
		{ text: "Go to the store at 4pm" },
	]);

	const addToTextList = (item) => {
		setTextList((textList) => [...textList, item]);
	};

	const removeFromTextList = (index) => {
		console.log("uses a splice method to figure this part out!", index);
		textList.splice(index, 1);
		setTextList((textList) => [...textList]);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<Navbar input={input} addToTextList={addToTextList} />
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
				<CheckboxList
					setInput={setInput}
					textList={textList}
					removeFromTextList={removeFromTextList}
				/>
			</div>
		</ThemeProvider>
	);
}

export default App;
