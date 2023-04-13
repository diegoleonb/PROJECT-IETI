import {Button, ChakraProvider, Box, Text} from "@chakra-ui/react";

export const Reserva = (props) => {

    const {reserva, onReservaDelete} = props;

    const handleDelete = () => {
        onReservaDelete(reserva.id);
    }

    return (
        <ChakraProvider>
            <Box paddingTop={5} bgColor={"blackAlpha.100"}>
                <Text> ID: {reserva.id}</Text>
                <Text>FECHA INICIO: {reserva.fechaInicio}</Text>
                <Text>FECHA FIN: {reserva.fechaFin}</Text>
                <Text>ESTADO: {reserva.estado}</Text>
                <Button varian= "solid" bgColor="red.500" size= "xs" rightIcon='🗑️' onClick={handleDelete}>Eliminar</Button>
            </Box> 
        </ChakraProvider>
    );
};