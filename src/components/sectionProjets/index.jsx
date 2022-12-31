import { useState } from "react";
import styles from "./styles.module.scss";
import { BiChevronsRight } from "react-icons/bi";

export function Projets({ className }) {
  const [background, setBackground] = useState("");

  function BackgroundChange(text) {
    if (text.target.innerText === "Cartões") {
      return styles.cartoes;
    }
    if (text.target.innerText === "Identidade Visual") {
      return styles.identidadeVisual;
    }
    if (text.target.innerText === "Cardápios") {
      return styles.cardapio;
    }
    if (text.target.innerText === "Social Midia") {
      return styles.socialMidia;
    }
    if (text.target.innerText === "Outros") {
      return styles.outros;
    }
  }
  function HoverOption(e) {
    setBackground(BackgroundChange(e));
  }
  function MouseOut() {
    setBackground(styles.defaultBackground);
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
              onMouseEnter={(e) => HoverOption(e)}
              onMouseOut={() => MouseOut()}
            >
              <BiChevronsRight size={30} />
              Cartões
            </li>
            <li
              onMouseEnter={(e) => HoverOption(e)}
              onMouseOut={() => MouseOut()}
            >
              <BiChevronsRight size={30} />
              Identidade Visual
            </li>
            <li
              onMouseEnter={(e) => HoverOption(e)}
              onMouseOut={() => MouseOut()}
            >
              <BiChevronsRight size={30} />
              Cardápios
            </li>
            <li
              onMouseEnter={(e) => HoverOption(e)}
              onMouseOut={() => MouseOut()}
            >
              <BiChevronsRight size={30} />
              Social Midia
            </li>
            <li
              onMouseEnter={(e) => HoverOption(e)}
              onMouseOut={() => MouseOut()}
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
