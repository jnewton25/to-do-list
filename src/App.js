import "./App.css";
import Navbar from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
		</ThemeProvider>
	);
}

export default App;
