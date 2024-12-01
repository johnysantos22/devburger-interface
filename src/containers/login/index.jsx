import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";


import {
    Container,
    Title,
    LeftContainer,
    RightContainer,
    InputContainer,
    Form,
} from "./styles";




export function Login() {
    const schema = yup
        .object({
            email: yup.string().email("Email inválido").required("Email obrigatório"),
            password: yup.string().min(6, "No mínimo 6 caracteres").required("Senha obrigatória"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const response = await toast.promise(api
            .post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'verificando credenciais',
                success: 'Login realizado com sucesso',
                error: 'Email ou senha inválidos',
            }
        );
        console.log(response);
    };
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


                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="text" placeholder="Email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <Button type="submit" >Entrar</Button>

                </Form>
                <p>
                    Não tem conta? <a>Cadastre-se</a>
                </p>
            </RightContainer>
        </Container>
    )
} 