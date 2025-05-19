export type TypeTaskLine = {
	id: number
	time: string
	tasks: TypeTask[]
	lastId: number
}
export type TypeTask = {
	id: number
	name: string
	description: string
}
export type EditTaskFunction = (
	time: string,
	id: number,
	name: string,
	description: string
) => void
export type SetTask = (name: string, description: string) => void
