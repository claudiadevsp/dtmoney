import { Container, Table, Td, Th } from "./styles";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";

interface Transaction  {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
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
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <Td>{transaction.title}</Td>
                            <Td type={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                            </Td>
                            <Td>{transaction.category}</Td>
                            <Td> 
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}