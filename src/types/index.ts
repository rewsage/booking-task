import { Dayjs } from "dayjs";

export interface formValues {
	tower: null | string;
	floor: null | string;
	meetingRoom: null | string;
	comment: null | string;
	date: Dayjs | null;
	startTime: Dayjs | null;
	endTime: Dayjs | null;
}
