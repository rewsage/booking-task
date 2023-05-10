import { TextField, TextFieldProps } from "@mui/material";

function CommentField(props: TextFieldProps) {
	return <TextField margin="normal" sx={{ width: "100%" }} {...props} />;
}

export { CommentField };
