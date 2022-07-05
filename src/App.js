import "./App.css";
//import Navbar1 from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./CheckboxList.css";
//import CheckboxList1 from "./CheckboxList";
import { Navbar, CheckboxList } from "./Todoapp";

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
			<div
				//className="rowC"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					backgroundColor: "#181818",
				}}
			>
				<CheckboxList />
			</div>
		</ThemeProvider>
	);
}

export default App;
