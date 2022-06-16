import "./App.css";
import Navbar from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./CheckboxList.css";
import CheckboxList from "./CheckboxList";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<Navbar />
			</div>
			<div className="rowC">
				<CheckboxList />
				<CheckboxList />
				<CheckboxList />
			</div>
		</ThemeProvider>
	);
}

export default App;
