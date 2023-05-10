import { Box, BoxProps } from "@mui/material";

interface FieldsContainerProps extends BoxProps {
	children: React.ReactNode;
}

function FieldsContainer({ children, ...props }: FieldsContainerProps) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				flexDirection: {
					xs: "column",
					sm: "row",
				},
				justifyContent: "space-between",
			}}
			{...props}>
			{children}
		</Box>
	);
}

export { FieldsContainer };
