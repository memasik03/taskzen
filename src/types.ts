export interface TypeTime {
	hour: number
	minute: number
}
export interface TypeRange {
	start: TypeTime
	end: TypeTime
}
export interface TypeTask extends TypeRange {
	id: number
	name: string
	description: string
	completed: boolean
}
export interface TypeEditorTask
	extends Omit<TypeTask, 'id'>,
		Partial<Pick<TypeTask, 'id'>> {}
export type EditTaskFunction = (
	time: string,
	id: number,
	name: string,
	description: string
) => void

export const enum TimeType {
	hour = 'hour',
	minute = 'minute',
}

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
export function summTime(time: TypeTime, takenTime: TypeTime): TypeTime {
	const date = new Date()
	date.setHours(time.hour + takenTime.hour)
	date.setMinutes(time.minute + takenTime.minute)
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
	}
}
export function getTimeNumber(time: TypeTime): number {
	const result: number = Math.sqrt(time.hour * 60 ** 2 + time.minute ** 2)
	return result > 30 ? result : 30
}
export function timeToString(time: TypeTime): string {
	return `${time.hour.toString().padStart(2, '0')}:${time.minute
		.toString()
		.padStart(2, '0')}`
}
export function compareTime(firsTime: TypeTime, secondTime: TypeTime): boolean {
	return (
		firsTime.hour === secondTime.hour && firsTime.minute === secondTime.minute
	)
}
