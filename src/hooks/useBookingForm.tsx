import { useState } from "react";
import { formValues } from "../types";

function useBookingForm(initialValues: formValues) {
	const [values, setValues] = useState(initialValues);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
		console.log(formJson);
	};

	const handleChange: React.ChangeEventHandler<
		HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
	> | null = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleReset = () => {
		setValues(initialValues);
	};

	return { values, setValues, handleChange, handleReset, handleSubmit };
}

export { useBookingForm };
