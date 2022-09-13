

export type housesStreetType = {
    title: string
}
export type housesAddressType = {
    number: number
    street: housesStreetType
}
export type housesArrayType = {
    buildedAt: number
    repaired: boolean
    address: housesAddressType

}
export type governmentBuildingsStreetType = {
    title:string
}
export type governmentBuildingsAdressType = {
    street: governmentBuildingsStreetType
}
export type governmentBuildingsArrayType = {
    type: string
    budget: number
    staffCount: number
    address: {
        street: {
            title: string
        }
    }
}

export type CityType = {
    title: string
    houses: Array<housesArrayType>
    governmentBuildings: Array<governmentBuildingsArrayType>
    citizensNumber: Number
}


