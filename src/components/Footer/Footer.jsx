import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <img
          src="/icons/copyright.png"
          alt="copyright"
          className={styles.copyRightIcon}
        />
        <p className={styles.text}>
          2023 | Designed and coded with ❤️️ by Asraf
        </p>
      </div>
    </section>
  );
};

export default Footer;
