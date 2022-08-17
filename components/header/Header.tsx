import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <div>Bálint</div>
        <div>Táborszki</div>
      </div>
      <div className={styles.titles}>
        <div> Frontend Developer</div>
        <div> Writer, Translator, Publisher</div>
        <div> Visual Designer </div>
      </div>
    </header>
  );
};

export default Header;
