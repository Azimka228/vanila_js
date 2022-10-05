// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли

import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";
import {CityType} from "../02/Practice";


let NewCity: CityType;

beforeEach(() => {
	NewCity = {
		title: "New York",
		houses: [
			{
				buildedAt: 2012,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: "White street"
					}
				}
			},
			{
				buildedAt: 2008,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: "Happy street"
					}
				}
			},
			{
				buildedAt: 2020,
				repaired: false,
				address: {
					number: 101,
					street: {
						title: "Happy street"
					}
				}
			}
		],
		governmentBuildings: [
			{
				type: "HOSPITAL",
				budget: 200000,
				staffCount: 200,
				address: {
					street: {
						title: "Central Str"
					}
				}
			},
			{
				type: "FIRE-STATION",
				budget: 500000,
				staffCount: 1000,
				address: {
					street: {
						title: "South Str"
					}
				}
			},

		],
		citizensNumber: 1000000
	}
})
test('House should be destroyed', () => {
	demolishHousesOnTheStreet(NewCity, 'Happy street');

	expect(NewCity.houses.length).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
	let buildings = getBuildingsWithStaffCountGreaterThen(NewCity.governmentBuildings, 500)

	expect(buildings.length).toBe(1);
	expect(buildings[0].type).toBe('FIRE-STATION')
})