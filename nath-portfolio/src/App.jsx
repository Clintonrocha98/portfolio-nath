import { Header } from "./components/header";
import { Main } from "./components/main";
import "./styles/global.scss";
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <>
      <Header className={styles.container}></Header>
      <Main className={styles.container}></Main>
    </>
  );
}

export default App;
