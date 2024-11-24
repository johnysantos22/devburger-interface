import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import {
    Title,
    Container,
    LeftContainer,
    RightContainer,
    InputContainer,
    Link,
    Button,
    Form,

} from "./styles";


export function Login() {

    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="logo-devburger" />

            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    Acesse com seu <apan>Login e senha.</apan>
                </Title>

                <Form>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Insira sua senha" />
                    </InputContainer>

                    <Button>Entrar</Button>

                </Form>
                <Link>Não tem conta? Cadastre-se</Link>
            </RightContainer>
        </Container>
    )
} 