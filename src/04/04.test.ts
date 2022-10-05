// @ts-ignore
test("should take man older then 90", () => {
	const ages = [18, 22, 8, 23, 41, 100, 200, 14, 12, 2]
	const predicate = (age: number) => {
		return age > 90
	}
	const oldAges = ages.filter(predicate)
	expect(oldAges.length).toBe(2)
	expect(oldAges[0]).toBe(100)

})
test("should take cheaper courses", () => {

	type courseType = {
		title: string
		price: number
	}

	const courses: Array<courseType> = [
		{title: "CSS", price: 100},
		{title: "HTML", price: 300},
		{title: "React", price: 200},
	]


	const cheapCourses = (c: courseType) => {
		return c.price < 220
	}
	const FiltredCourses = courses.filter(cheapCourses)

	expect(FiltredCourses[0].price).toBe(100)
})
test ("should return verified tasks", () => {
	type courseType = {
		id: number
		title: string
		verified: boolean
	}

	const courses: Array<courseType> = [
		{id: 1, title: "Make up" , verified: true},
		{id: 2, title: "Sleep 4 hours" , verified: true},
		{id: 3, title: "Smoking" , verified: false},
		{id: 4, title: "Cheating" , verified: true},
	]

	const FiltredCourses = courses.filter(c => c.verified)

	expect(FiltredCourses[2].id).toBe(4)
})