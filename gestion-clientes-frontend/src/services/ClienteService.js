import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "https://clientes-gestion.onrender.com/api/v1";

class ClienteService {

    getAllClientes() {
        return axios.get(CLIENTE_BASE_REST_API_URL + "/clientes");
    }

    createCliente(cliente) {
        return axios.post(CLIENTE_BASE_REST_API_URL + "/clientes", cliente);
    }

    getClienteById(clienteId) {
        return axios.get(CLIENTE_BASE_REST_API_URL + "/clientes/" + clienteId);
    }

    updateCliente(clienteId, cliente) {
        return axios.put(CLIENTE_BASE_REST_API_URL + "/clientes/" + clienteId, cliente);
    }

    deleteCliente(clienteId) {
        return axios.delete(CLIENTE_BASE_REST_API_URL + "/clientes/" + clienteId);
    }
}

export default new ClienteService();
