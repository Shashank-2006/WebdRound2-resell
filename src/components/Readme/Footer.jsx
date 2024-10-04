import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/reddipalli-shashank-013b7b28b"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/Shashank-2006" icon={BsGithub} />

        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
