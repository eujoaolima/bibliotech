import { IconName } from "react-icons/fa";
import logoFooter from "../../assets/images/BIBLIOTECHLogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Footer() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  return (
    <div className={temaEscuro ? "dark-mode-custom text-light mt-3" : "bg-white text-dark mt-4"}>
      <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
        <div className="container-fluid text-center text-md-left mb-2">
      
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              <Link as={Link} to="/">
                <img
                  src={logoFooter}
                  alt="logo-footer"
                  width="150"
                  id="logo-footer"
                />
              </Link>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
              <h5 className="text-uppercase">Informações</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark" }
                    as={Link}
                    to="/cookies">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link className={ temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                     as={Link}
                    to="/politicas-de-privacidade">
                    Políticas de privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    as={Link}
                    to="/termosECondicoes"
                  >
                    Termos e condições de uso
                  </Link>
                </li>     

              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
              <h5 className="text-uppercase">Suporte</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    as={Link}
                    to="/ajuda"
                  >
                    Ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    as={Link}
                    to="/perfilUsuario"
                  >
                    Sua conta
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    as={Link}
                    to="/emprestimos"
                  >
                    Seus empréstimos
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    as={Link}
                    to="/livros"
                  >
                    Seus livros
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
              <h5 className="text-uppercase">Redes sociais</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    href="https://github.com/eujoaolima/bibliotech" target="_blank"
                  >
                    <i className="bi bi-github"></i> Github
                  </a>
                </li>
                <li>
                  <a
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    href="https://www.instagram.com/" target="_blank"
                  >
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    href="https://br.linkedin.com/" target="_blank"
                  >
                    <i className="bi bi-linkedin"></i> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className={
                      temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"
                    }
                    href="https://www.tiktok.com/pt-BR/" target="_blank"
                  >
                    <i className="bi bi-tiktok"></i> Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2023 Copyright: Squad #8 - Projeto Bibliotech SoulCode
        </div>
      </div>
    </div>
  );
}
