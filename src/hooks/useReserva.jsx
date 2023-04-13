import { useEffect, useState } from 'react'
import axios from 'axios'

export function useReserva(){
    const [reservas, setReservas] = useState([]);

    function addReserva(newReserva){
        axios.post('http://localhost:8080/addReserva',{
            id : newReserva.id,
            idUsuario : newReserva.idUsuario,
            idEspacio : newReserva.idEspacio,
            fechaInicio : newReserva.fechaInicio,
            fechaFin : newReserva.fechaFin,
            estado : newReserva.estado
        })
        .then(() => {
            return axios.get('http://localhost:8080/reservas');
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }

    function editReserva(){
    }

    function deleteReserva(id){
        axios.delete('http://localhost:8080/deleteReserva/' + id)
        .then(() => {
            return axios.get('http://localhost:8080/reservas');
        })
        .then((response) => {
            setReservas(response.data);
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }

    useEffect(() => {
        axios.get('http://localhost:8080/reservas')
          .then((response) => {
            setReservas(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return[reservas,addReserva,editReserva ,deleteReserva]
}