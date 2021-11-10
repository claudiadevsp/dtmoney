import logoImg from '../../assets/img/logo.svg';
import {
    Container,
    Content
} from './styles';

type HeaderProps = {
 onOpenNewTransactionModal: () => void;   
}

export function Header(props: HeaderProps) {

    const { onOpenNewTransactionModal } = props
  
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação.
                </button>
            </Content>
        </Container>
    )
}