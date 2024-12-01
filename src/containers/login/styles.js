import styled  from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.svg";
import background from "../../assets/background.svg";
export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`;

export const LeftContainer = styled.div`
background: url('${backgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width:50%;

display: flex;
align-items: center;
justify-content: center;

img {
    width: 80%;
}
`;

export const RightContainer = styled.div`
background: url('${background}');
background-color: #1e1e1e;

height: 100%;
width: 100%;
max-width:50%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;
}

a {
    color: #fff;
    text-decoration:underline
}
`;

export const Title = styled.div`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #ffffff;

  span {
    color: #9758a6;
    font-family: "Road Rage", sans-serif;

  }

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0 16px;
    font-size: 16px;
}

label {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
}

p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 800;
    height: 10px;
}

`;


