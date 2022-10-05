import {CityType, governmentBuildingsArrayType} from "../02/Practice";

export function demolishHousesOnTheStreet(newCity: CityType, happyStreet: string) {
		newCity.houses = newCity.houses.filter(h => h.address.street.title !== happyStreet)
}


export function getBuildingsWithStaffCountGreaterThen(city: Array<governmentBuildingsArrayType>, staffCount:number){
	return city.filter(e => e.staffCount > staffCount)
}