import styles from "./styles.module.scss";
import { BiTime } from "react-icons/bi";
import { FiUsers, FiFile } from "react-icons/fi";

export function Information({ className }) {
  return (
    <>
      <article>
        <div className={`${className} ${styles.warrapInfo}`}>
          <div className={styles.card}>
            <FiUsers size={30} />
            <h2>50+</h2>
            <p>Clientes</p>
          </div>
          <div className={styles.card}>
            <BiTime size={30} />
            <h2>03</h2>
            <p>Anos de experiência</p>
          </div>
          <div className={styles.card}>
            <FiFile size={30} />
            <h2>80+</h2>
            <p>Projetos</p>
          </div>
        </div>
      </article>
    </>
  );
}
