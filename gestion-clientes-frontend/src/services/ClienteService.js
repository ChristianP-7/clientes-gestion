import axios from "axios";
import viteConfig from "../../vite.config";

const CLIENTE_BASE_REST_API_URL = import.meta.env.VITE_API_URL;

class ClienteService{

    getAllClientes(){
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }

    createCliente(cliente){
        return axios.post(CLIENTE_BASE_REST_API_URL,cliente);
    }

    getClienteById(clienteId){
        return axios.get(CLIENTE_BASE_REST_API_URL + '/' + clienteId);
    }

    updateCliente(clienteId, cliente){
        return axios.put(CLIENTE_BASE_REST_API_URL + '/' + clienteId,cliente);
    }

    deleteCliente(clienteId){
        return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + clienteId); 
    }
}

export default new ClienteService();