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
  const projets = [
    {
      id: 0,
      name: "Cartões",
    },
    {
      id: 1,
      name: "Identidade Visual",
    },
    {
      id: 2,
      name: "Cardápios",
    },
    {
      id: 3,
      name: "Social Midia",
    },
    {
      id: 4,
      name: "Outros",
    },
  ];
  return (
    <>
      <section>
        <div
          loading="auto"
          className={`${styles.Background} ${background}`}
        ></div>
        <div className={`${className} ${styles.warrapProjets}`}>
          <h1>Projetos</h1>
          <ul>
            {projets.map((projet) => (
              <li
                key={projet.id}
                onMouseEnter={(e) => BackgroundChange(e)}
                onMouseOut={() => setBackground(styles.defaultBackground)}
              >
                <BiChevronsRight size={30} />
                {projet.name}
              </li>
            ))}
          </ul>
        </div>
        
      </section>
    </>
  );
}
