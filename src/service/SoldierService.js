import axios from 'axios'

// backend won't connect?
// const soldier_mangement_system
//This is the component with the errors before the code broke after I create the listSoldier

const SOLDIER_API_BASE_URL = "http://localhost:8080/api/soldiers"

class SoldierService {

    getSoldier(){
        return axios.get(SOLDIER_API_BASE_URL)
    }
}

export default new SoldierService