import styles from "./styles.module.scss";
import perfil from '../../../public/perfil.webp'
import { SocialMidiaButtons } from "../social-midia-buttons";

export function Main({ className }) {
  return (
    <>
      <main>
      <SocialMidiaButtons></SocialMidiaButtons>
        <div className={`${className} ${styles.warrapMain}`}>
          <div className={styles.sobre}>
            <h1>Sobre mim</h1>
            <p>
              Sou Designer Gráfico | Freelancer, trabalho um pouco de tudo
              &#x00028;Social mídia, Diagramação, Design de Identidade Visual,
              Logomarca desenhada&#x00029; um trabalho único para cada cliente
              que passa por mim. Tenho projetos futuros de focar em ilustrações
              também, no momento não estou com tempo.
            </p>
            <div className={styles.warrapButtons}>
              <button>Adobe</button>
              <button>Illustrator</button>
              <button>Photoshop</button>
              <button>Indesign</button>
              <button>CorelDraw</button>
            </div>
          </div>
          <div className={styles.warrapImage}>
            <img src={perfil} alt="foto de perfil da Nathalia" />
          </div>
        </div>
      </main>
    </>
  );
}
