import houseService from "../Services/HouseService.js";
import STORE from "../store.js"

//private
function _drawHouse() {
    let houses = STORE.State.houses
    let template = ''

    houses.forEach(house => template += house.Template)
    document.getElementById("houses").innerHTML = template
}


//public

export default class houseController {
    constructor() {
        _drawHouse();
    }

    createHouse() {
        event.preventDefault();
        let form = event.target
        let houseGuts = {
            style: form.style.value,
            size: form.size.value,
            year: form.year.value,
            price: form.price.value,
            img: form.img.value
        }
        houseService.makeHouse(houseGuts)
        _drawHouse;
    }

}

