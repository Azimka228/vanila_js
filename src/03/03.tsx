import { StudentType} from "../02/02";

export const addSkill = (student: StudentType,skill: string) => {
    student.technologies.push({
        id: student.technologies.length+1,
        name: skill ,
    })

}
export const StudentChangeCity = (student: StudentType , city: string) => {
    student.address.city.title = city
}