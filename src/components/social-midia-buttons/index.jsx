import { BsLinkedin, BsFacebook, BsInstagram, BsBehance } from "react-icons/bs";
import styles from "./styles.module.scss";
export function SocialMidiaButtons() {
  return (
    <>
      <nav className={styles.social}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nathalia-santos-cesar-247264208/"
              target="_blank"
            >
              Linkedin
              <span>
                <BsLinkedin size={30} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/nathaliasc.designer/"
              target="_blank"
            >
              Facebook
              <span>
                <BsFacebook size={30} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nathaliasc.designer/"
              target="_blank"
            >
              Instragram
              <span>
                <BsInstagram size={30} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/nathaliascdesigner"
              target="_blank"
            >
              Behance
              <span>
                <BsBehance size={30} />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
