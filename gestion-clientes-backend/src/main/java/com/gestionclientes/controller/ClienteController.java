package com.gestionclientes.controller;

import com.gestionclientes.entities.Cliente;
import com.gestionclientes.exceptions.ResourceNotFoundException;
import com.gestionclientes.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://clientes-gestion.vercel.app/")
@RestController
@RequestMapping("/api/v1")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/clientes")
    public List<Cliente> listarClientes(){

        return clienteRepository.findAll();
    }

    @PostMapping("/clientes")
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> listarClientePorId(@PathVariable Long id){
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El cliente no existe: " + id));

        return ResponseEntity.ok(cliente);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteRequest){
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El cliente no existe: " + id));

        cliente.setNombre(clienteRequest.getNombre());
        cliente.setApellido(clienteRequest.getApellido());
        cliente.setEmail(clienteRequest.getEmail());

        Cliente clienteActualizado = clienteRepository.save(cliente);

        return ResponseEntity.ok(clienteActualizado);
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity <Map<String,Boolean>> eliminarCliente(@PathVariable Long id){
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El cliente no existe: " + id));

        clienteRepository.delete(cliente);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
