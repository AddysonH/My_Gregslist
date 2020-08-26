import House from "../Models/House.js"
import STORE from "../store.js"

class houseService {

    makeHouse(houseGuts) {
        let house = new House(houseGuts)
        STORE.State.houses.push(house)
    }
}

const SERVICE = new houseService();
export default SERVICE