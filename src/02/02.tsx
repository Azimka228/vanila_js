export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesArrayType>
}

export type technologiesArrayType = {
    id: number
    name: string
}
export type addressType = {
    street: string
    city: localCityType
}
export type localCityType = {
    title: string
    countryTitle: string
}

export const student: StudentType = {
    id: 1,
    name: "Dmitriy",
    age: 19,
    isActive: true,
    address: {
        street: "Zavodskaya",
        city: {
            title: "Misnk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "REACT"},
    ],

}

console.log(student.age)
console.log(student.name)
console.log(student.address.street)
