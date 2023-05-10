import { Box } from "@mui/material";
import { Dropdown } from "../Dropdown";
import { StyledButton } from "../StyledButton";
import { CommentField } from "../CommentField";
import { FieldsContainer } from "../FieldsContainer";
import { PeriodField } from "../PeriodField";
import { towers, floors, meetingRooms } from "../../utils";
import { formValues } from "../../types";
import { useBookingForm } from "../../hooks";
import dayjs from "dayjs";

const initialValues: formValues = {
	tower: null,
	floor: null,
	meetingRoom: null,
	comment: null,
	date: dayjs(),
	startTime: dayjs(),
	endTime: dayjs(),
};

function BookingForm() {
	const form = useBookingForm(initialValues);

	return (
		<Box
			sx={{ width: "100%" }}
			component="form"
			onSubmit={form.handleSubmit}>
			<FieldsContainer>
				<Dropdown
					label="Башня"
					name="tower"
					onChange={form.handleChange}
					items={towers}
				/>
				<Dropdown
					label="Этаж"
					name="floor"
					onChange={form.handleChange}
					items={floors}
				/>
				<Dropdown
					label="Переговорная"
					name="meetingRoom"
					onChange={form.handleChange}
					items={meetingRooms}
				/>
			</FieldsContainer>

			<FieldsContainer>
				<PeriodField
					label="Дата"
					name="date"
					values={form.values}
					handleChange={form.setValues}
					type="date"
				/>

				<PeriodField
					label="Время начала"
					name="startTime"
					values={form.values}
					handleChange={form.setValues}
					type="time"
				/>

				<PeriodField
					label="Время окончания"
					name="endTime"
					values={form.values}
					handleChange={form.setValues}
					type="time"
				/>
			</FieldsContainer>

			<CommentField
				name="comment"
				label="Комментарий"
				onChange={form.handleChange}
			/>

			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					mt: 2,
				}}>
				<StyledButton type="submit" color="info">
					Отправить
				</StyledButton>
				<StyledButton
					type="reset"
					onClick={form.handleReset}
					color="error">
					Очистить
				</StyledButton>
			</Box>
		</Box>
	);
}

export { BookingForm };
