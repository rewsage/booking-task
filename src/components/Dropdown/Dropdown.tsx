import {
	FormControl,
	InputLabel,
	NativeSelect,
	NativeSelectProps,
} from "@mui/material";

interface DropdownProps extends NativeSelectProps {
	name: string;
	label: string;
	items: string[] | number[];
}

function Dropdown({
	name,
	label,
	items,
	...props
}: DropdownProps): JSX.Element {
	const options = items.map((item) => (
		<option value={item} key={item}>
			{item}
		</option>
	));

	return (
		<FormControl margin="normal" sx={{ minWidth: { sm: "30%" } }}>
			<InputLabel variant="standard" htmlFor={`${name}-id`}>
				{label}
			</InputLabel>
			<NativeSelect
				inputProps={{
					name: name,
					id: `${name}-id`,
				}}
				{...props}>
				{options}
			</NativeSelect>
		</FormControl>
	);
}

export { Dropdown };
