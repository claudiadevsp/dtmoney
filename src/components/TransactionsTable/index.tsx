import { Container, Table, Td, Th } from "./styles"
import { useEffect } from 'react'
import { api } from "../../services/api";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <Th>Título</Th>
                        <Th>Valor</Th>
                        <Th>Categoria</Th>
                        <Th>Data</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>Desenvolvimento de webSite</Td>
                        <Td currency="green">R$12000</Td>
                        <Td>Desenvolviimento</Td>
                        <Td>20/07/2021</Td>
                    </tr>
                    <tr>
                        <Td>Aluguel</Td>
                        <Td currency="red">-R$1100</Td>
                        <Td>Desenvolviimento</Td>
                        <Td>20/07/2021</Td>
                    </tr>               
                </tbody>
            </Table>
        </Container>
    );
}