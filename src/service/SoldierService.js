import axios from 'axios'

const SOLDIER_API_BASE_URL = "http://localhost:8080/api/soldiers"

class SoldierService {

    getSoldier(){
        return axios.get(SOLDIER_API_BASE_URL)
    }

createSoldier(soldier){
    return axios.post(SOLDIER_API_BASE_URL)
}

getSoldierByID(soldier){
    return
}
}

export default new SoldierService