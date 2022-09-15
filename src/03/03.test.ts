import {StudentType} from "../02/02";
import {addSkill, StudentChangeCity} from "./03";
let student: StudentType
beforeEach(() => {
        student = {
            id: 1,
            name: "Dmitriy",
            age: 19,
            isActive: true,
            address: {
                street: "Zavodskaya",
                city: {
                    title: "Minsk",
                    countryTitle: "Belarus",
                }
            },
            technologies: [
                {id: 1, name: "HTML"},
                {id: 2, name: "CSS"},
                {id: 3, name: "REACT"},
            ],

        }
    }
)

test("New skill should be added", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "Angular")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBe(4)
    expect(student.technologies[3].name).toBe("Angular")
})
test("Student should change cityTitle" , ()=> {
    expect(student.address.city.title).toBe("Minsk")


    StudentChangeCity(student,"Moscow")

    expect(student.address.city.title).toBeDefined()
    expect(student.address.city.title).toBe("Moscow")

})

