import axios from "axios"

const SOLDIER_API_BASE_URL = "http://localhost:8080/api"

class SoldierService {

    getSoldiers(){
        return axios.get(SOLDIER_API_BASE_URL + '/soldiers')
    }

createSoldier(soldier){
    return axios.post(SOLDIER_API_BASE_URL + '/add-soldier', soldier)
}

getSoldierByID(soldierId){
    return axios.get(SOLDIER_API_BASE_URL + '/soldier/' + soldierId)
}

updateSoldier(soldier,id){
    return axios.put(SOLDIER_API_BASE_URL+"/soldier/"+id,soldier);
}



deleteSoldier(soldierId) {
    return axios.delete(SOLDIER_API_BASE_URL + '/soldiers/' + soldierId)

}

}

export default new SoldierService();