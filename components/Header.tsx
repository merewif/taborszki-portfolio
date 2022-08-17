import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <div>Bálint</div>
        <div>Táborszki</div>
      </div>
    </header>
  );
};

export default Header;
