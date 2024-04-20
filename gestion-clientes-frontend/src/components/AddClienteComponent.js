import React, {useEffect, useState} from 'react'
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddClienteComponent = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();
        const cliente = {nombre, apellido, email};

        if(id){
            ClienteService.updateCliente(id,cliente).then((response) => {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error)
            })
        }
        else{
            ClienteService.createCliente(id,cliente).then((response) => {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() =>{
        ClienteService.getClienteById(id).then((response) => {
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setEmail(response.data.email);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Actualizar Cliente</h2>;
        }
        else{
            return <h2 className='text-center'>Agregar Cliente</h2>;
        }
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>
                        {
                            title()
                        }
                    </h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombre</label>
                                <input type='text' placeholder='Digite su nombre' name='nombre' className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Apellido</label>
                                <input type='text' placeholder='Digite su apellido' name='apellido' className='form-control' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-mail</label>
                                <input type='text' placeholder='Digite su E-mail' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateCliente(e)}>Guardar</button>
                            &nbsp;&nbsp;
                            <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddClienteComponent;