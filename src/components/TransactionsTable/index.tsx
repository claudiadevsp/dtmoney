import { Container, Table, Td, Th } from "./styles";
import { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable() {

    const { transactions } = useTransactions();

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