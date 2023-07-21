import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";


import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  CriarText,
  Row,
  Wrapper,
  SubtitleLoginButton,
  SubRow,
} from "./styles";

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async () => {
      navigate("/login"); 
    };

    console.log('errors', errors);

    return (
      <>
        <Header />
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="Nome Completo"
                  leftIcon={<MdEmail />}
                  name="name"
                  control={control}
                />
                {errors.name && <span>Nome é obrigatório</span>}
                <Input
                  placeholder="E-mail"
                  leftIcon={<MdEmail />}
                  name="email"
                  control={control}
                />
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input
                  type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock />}
                  name="senha"
                  control={control}
                />
                {errors.senha && <span>Senha é obrigatório</span>}
                <Button
                  title="Criar minha conta"
                  variant="secondary"
                  type="submit"
                />
              </form>
              <Column>
                <SubtitleLoginButton>
                  Ao clicar em "criar minha conta grátis", declaro que aceito as
                  Políticas de Privacidade e os Termos de Uso da DIO.
                </SubtitleLoginButton>
                <Row>
                  <SubRow>
                    <div>Ja tenho conta.</div>
                    <CriarText>Fazer Login</CriarText>
                  </SubRow>
                </Row>
              </Column>
            </Wrapper>
          </Column>
        </Container>
      </>
    );
}

export { Register };