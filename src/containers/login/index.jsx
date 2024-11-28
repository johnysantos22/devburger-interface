import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";

import {
    Container,
    Title,
    LeftContainer,
    RightContainer,
    InputContainer,
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
                    <br />
                    Acesse com seu <span> Login e senha. </span>
                </Title>


                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="text" placeholder="Email" />
                        <label>Senha</label>
                        <input type="password" placeholder="Insira sua senha" />
                    </InputContainer>

                    <Button>Entrar</Button> 

                </Form>
                <p>
                    Não tem conta? <a>Cadastre-se</a>
                </p>
            </RightContainer>
        </Container>
    )
} 