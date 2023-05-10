import {
	DateField,
	DateTimeValidationError,
	TimeField,
} from "@mui/x-date-pickers";
import { formValues } from "../../types";
import { FieldChangeHandler } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";

interface CustomDateField {
	name: keyof formValues;
	label: string;
	values: formValues;
	handleChange: React.Dispatch<React.SetStateAction<formValues>>;
	type: "date" | "time";
}

function PeriodField({
	name,
	label,
	values,
	handleChange,
	type,
	...props
}: CustomDateField): JSX.Element {
	const onChange: FieldChangeHandler<
		string | dayjs.Dayjs | null,
		DateTimeValidationError
	> = (newValue) => handleChange({ ...values, [name]: newValue });

	props = {
		name,
		label,
		margin: "normal",
		sx: {
			maxWidth: {
				sm: "30%",
			},
		},
		value: values[name],
		onChange,
		...props,
	};

	return type === "date" ? (
		<DateField {...props} />
	) : (
		<TimeField {...props} />
	);
}

export { PeriodField };
