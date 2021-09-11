import { Card, Container } from "./styles";
import incomeImg from '../../assets/img/income.svg'
import outcomeImg from '../../assets/img/outcome.svg'
import totalImg from '../../assets/img/total.svg'

export function Summary() {
    return (
        <Container>
            <Card highlight="shape">
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </Card>
            <Card highlight="shape">
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-R$ 500,00</strong>
            </Card>
            <Card highlight="green">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 500,00</strong>
            </Card>
        </Container>
    )
}