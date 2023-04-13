import { ChakraProvider, Box, Flex, Text, Button, Grid } from "@chakra-ui/react";
import { useReserva } from "../hooks/useReserva";
import { Reserva } from "./Reserva";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Reservas = () => {
    
    const[reservas, addReserva, editReserva, deleteReserva] = useReserva();
    const [form , setForm] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        addReserva({
            id : data.id,
            idUsuario : data.idUsuario,
            idEspacio : data.idEspacio,
            fechaInicio : data.fechaInicio,
            fechaFin : data.fechaFin,
            estado : data.estado
        });
        setForm(false);
    };

    const handleDelete = (id) => {
        deleteReserva(id);
    };

    const handleNew = () => {
        setForm(true);
    }

    const handleCancelar = () => {
        setForm(false);
    }

    return (
        <ChakraProvider>
            <Box>
                <Flex align={"center"} justifyContent={"center"}>
                <Text fontSize="2xl" fontWeight="bold" color="gray.800" mr={2}> Reservas</Text>
                </Flex>
                {form && <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>
                                <input type="text" placeholder="id" {...register("id", { required: true })} />
                            </label>
                            {errors.id && <span>El ID es requerido</span>}
                        </div>
                        <div>
                            <label>
                                <input type="text" placeholder="idUsuario" {...register("idUsuario", { required: true })} />
                            </label>
                            {errors.idUsuario && <span>El ID del usuario es requerido</span>}
                        </div>
                        <div>
                            <label>
                                <input type="text" placeholder="idEspacio" {...register("idEspacio", { required: true })} />
                            </label>
                            {errors.idEspacio && <span>El ID del espacio es requerido</span>}
                        </div>
                        <div>
                            <label>
                                <input type="text" placeholder="fechaInicio" {...register("fechaInicio", { required: true })} />
                            </label>
                            {errors.fechaInicio && <span>La fecha de inicio es requerida</span>}
                        </div>
                        <div>
                            <label>
                                <input type="text" placeholder="fechaFin" {...register("fechaFin", { required: true })} />
                            </label>
                            {errors.fechaFin && <span>La fecha de fin es requerida</span>}
                        </div>
                        <div>
                            <label>
                                <input type="text" placeholder="estado" {...register("estado", { required: true })} />
                            </label>
                            {errors.estado && <span>El estado es requerido</span>}
                        </div>
                        <Grid>
                            <button>Agregar</button>
                            <Button size={"xs"} variant="ghost" bgColor={"red.300"} onClick={handleCancelar}>Cancelar</Button>
                        </Grid>
                    </form>    
                </div>
                }
                {!form && 
                    <div>
                        <Button variant="outline" size = "xs" leftIcon='➕' onClick={handleNew}>Nueva Reserva</Button>
                    </div>
                }
                {reservas.map((reserva) => (
                    <div key={reserva.id}>
                        <Reserva reserva = {reserva} onReservaDelete = {handleDelete} />
                    </div>
                ))}
            </Box>
        </ChakraProvider>
    );
      
};