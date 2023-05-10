import { Button, ButtonProps } from "@mui/material";

function StyledButton(props: ButtonProps) {
	return (
		<Button
			variant="contained"
			size="large"
			sx={{
				minWidth: "48%",
				fontWeight: "bold",
			}}
			{...props}
		/>
	);
}

export { StyledButton };
