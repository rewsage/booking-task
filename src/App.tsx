import { Box, Container, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BookingForm } from "./components";
import "dayjs/locale/ru";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
			<CssBaseline />
			<Container>
				<Box
					sx={{
						display: "flex",
						height: "100vh",
						alignItems: "center",
						m: "auto",
						maxWidth: {
							xs: 1,
							sm: 3 / 4,
							md: 1 / 2,
						},
					}}>
					<BookingForm />
				</Box>
			</Container>
		</LocalizationProvider>
	);
}

export default App;
