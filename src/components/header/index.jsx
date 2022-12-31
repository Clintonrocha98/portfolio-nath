import logo from "../../../public/logo.webp";
import styles from "./styles.module.scss";

export function Header({ className }) {
  return (
    <>
      <header>
        <div className={`${className} ${styles.warrapHeader}`}>
          <div className={styles.warrapLogo}>
            <img src={logo} alt="logo da pagina" />
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
