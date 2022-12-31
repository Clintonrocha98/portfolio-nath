import { useState } from "react";
import styles from "./styles.module.scss";
import { BiChevronsRight } from "react-icons/bi";

export function Projets({ className }) {
  const [background, setBackground] = useState("");

  function BackgroundChange(text) {
    if (text.target.innerText === "Cartões") {
      return setBackground(styles.cartoes);
    }
    if (text.target.innerText === "Identidade Visual") {
      return setBackground(styles.identidadeVisual);
    }
    if (text.target.innerText === "Cardápios") {
      return setBackground(styles.cardapio);
    }
    if (text.target.innerText === "Social Midia") {
      return setBackground(styles.socialMidia);
    }
    if (text.target.innerText === "Outros") {
      return setBackground(styles.outros);
    }
  }

  return (
    <>
      <section id="projetos">
        <div
          loading="auto"
          className={`${styles.Background} ${background}`}
        ></div>
        <div className={`${className} ${styles.warrapProjets}`}>
          <h1>Projetos</h1>
          <ul>
            <li
              onMouseEnter={(e) => BackgroundChange(e)}
              onMouseOut={() => setBackground(styles.defaultBackground)}
            >
              <BiChevronsRight size={30} />
              Cartões
            </li>
            <li
              onMouseEnter={(e) => BackgroundChange(e)}
              onMouseOut={() => setBackground(styles.defaultBackground)}
            >
              <BiChevronsRight size={30} />
              Identidade Visual
            </li>
            <li
              onMouseEnter={(e) => BackgroundChange(e)}
              onMouseOut={() => setBackground(styles.defaultBackground)}
            >
              <BiChevronsRight size={30} />
              Cardápios
            </li>
            <li
              onMouseEnter={(e) => BackgroundChange(e)}
              onMouseOut={() => setBackground(styles.defaultBackground)}
            >
              <BiChevronsRight size={30} />
              Social Midia
            </li>
            <li
              onMouseEnter={(e) => BackgroundChange(e)}
              onMouseOut={() => setBackground(styles.defaultBackground)}
            >
              <BiChevronsRight size={30} />
              Outros
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
