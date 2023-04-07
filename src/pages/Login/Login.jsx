import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logoIcon from "../../assets/images/Logo3.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { loginGoogle, loginEmailSenha, loginGitHub, loginFacebook } from "../../firebase/auth";
import  { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import "./Login.css";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);

  const usuarioLogado = useContext(AuthContext);

  if (usuarioLogado !== null) {
    navigate("/");
    return null;
  }


  function onSubmit(data) {
    const { email, senha } = data;
    loginEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Entrando como ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGoogle() {
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGitHub() {
    // then = quando der certo o processo
    loginGitHub()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginFacebook() {
    // then = quando der certo o processo
    loginFacebook()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }



  // Se tiver dados no objeto, está logado
  if (usuarioLogado !== null) {
    navigate("/");
    return null;
  }

  return (
    <>
      {
        usuarioLogado !== null ? ( <section>
          <Container fluid className="my-5">     
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div id="container-login" className="card border-0 shadow rounded-3  my-5 px-5">
                <div className="card-body p-1 p-sm-4"></div>
                <p className="text-center">
                  <img src={logoIcon} width="70%" alt="Logo do app" />
                </p>
                <h5 class="card-title text-muted text-center mb-3 fw-light fs-3">Faça seu Login</h5>
                <p className="text-muted mt-3 "> Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
                <hr className="mt-0" />
          
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <div>
                    <Form.Control
                      type="email"
                      placeholder="Seu email"
                      className={errors.email ? "form-control is-invalid" : "form-control"}
                      {...register("email", { required: "Email é obrigatório" })}
                    />      
                  </div>
                  <Form.Text className="invalid-feedback">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
      
                  <div className="input-group mb-3">
                    <Form.Control
                      type={mostrar ? "text" : "password"}
                      className={errors.senha && "is-invalid"}
                      placeholder="Senha"
                      {...register("senha", { required: "A senha é obrigatória" })}
                    />
                    <Button
                      variant="secondary" type="button"
                      className="p-2 btn btn-outline-secondary"
                      onClick={() => setMostrar(!mostrar)}>
                      {mostrar ? <AiOutlineEye />
                        : <AiOutlineEyeInvisible />}
                    </Button>
                  </div>
                  <Form.Text className="invalid-feedback">
                    {errors.senha?.message}
                  </Form.Text>
                </Form.Group>
                
                <div className="d-grid">
                  <Button
                    variant="primary"
                    className="btn btn-m btn-outline-secondary text-white text-uppercase fw-bold  "
                    type="submit">
                    Entrar
                  </Button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <Button
                    variant="danger"
                    className="btn-login text-uppercase fw-bold border-0 btn-m btn-outline-secondary"
                    type="button"
                    onClick={onLoginGoogle}>
                    <i className="bi bi-google " width="32"></i> Entrar com Google
                  </Button>
                </div>
                
                <div className="d-grid mb-2">
                  <Button 
                    variant="secondary"
                    className="btn-login text-uppercase fw-bold border-1 btn-m" type="button"  onClick={onLoginGitHub} >
                    <i className="bi bi-github" width="32" ></i> Entrar com Github 
                  </Button>
                </div>
                <div className="d-grid mb-5">
                  <Button
                    variant="primary"
                    className="btn-login text-uppercase fw-bold btn-m border-0 btn-outline-secondary"
                    type="button" onClick={onLoginFacebook}>
                    <i className="bi bi-facebook" width="32"></i> Entrar com Facebook
                  </Button>
                </div>
                
              </Form>
              </div>
              </div>
            </div>    
          </Container>
          </section> ) : (<Navigate to="/"/>)
      }
    </>
    );
}
