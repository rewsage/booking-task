const towers = ["А", "Б"];
const floors: number[] = [];
const meetingRooms: number[] = [];

for (let i = 3; i <= 27; i++) {
	floors.push(i);
}

for (let i = 1; i <= 10; i++) {
	meetingRooms.push(i);
}

export { towers, floors, meetingRooms };
