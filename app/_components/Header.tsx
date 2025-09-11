import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <a href="https://projectschool.dev/exercises/reactlessons" className={style.a}>
        Project School React
      </a>
    </header>
  );
}