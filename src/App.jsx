import { Header } from "./components/header";
import { Information } from "./components/information";
import { Main } from "./components/main";
import { Projets } from "./components/sectionProjets";
import "./styles/global.scss";
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <>
      <Header className={styles.container}></Header>
      <Main className={styles.container}></Main>
      <Information className={styles.container}></Information>
      <Projets className={styles.container}></Projets>
    </>
  );
}

export default App;
