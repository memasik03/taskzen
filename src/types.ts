export type TypeTime = { hour: number; minute: number }
export type TypeTask = {
	id: number
	name: string
	description: string
	start: TypeTime
	end: TypeTime
}
export type EditTaskFunction = (
	time: string,
	id: number,
	name: string,
	description: string
) => void

export function setTime(time: TypeTime, timeToAdd: TypeTime): TypeTime {
	const date = new Date()
	date.setHours(time.hour + timeToAdd.hour)
	date.setMinutes(time.minute + timeToAdd.minute)

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
	}
}
export function getTimeDifference(
	time: TypeTime,
	takenTime: TypeTime
): TypeTime {
	const date = new Date()
	date.setHours(time.hour - takenTime.hour)
	date.setMinutes(time.minute - takenTime.minute)
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
	}
}
export function getTimeNumber(time: TypeTime): number {
	const result: number = parseInt(time.hour.toString() + time.minute.toString())
	return result > 30 ? result : 30
}
export function timeToString(time: TypeTime): string {
	return `${time.hour.toString().padStart(2, '0')}:${time.minute
		.toString()
		.padStart(2, '0')}`
}
