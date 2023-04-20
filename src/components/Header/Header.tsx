import React from 'react';
import Link from 'next/link';
import Button from '../UI/Button/Button';
import styles from './header.module.scss';
import logo2 from './logo2.png';
import {
  cartoonsGenreFirstColumn,
  cartoonsGenreSecondColumn,
  cartoonsYears,
  cartoonsCountryes,
  cartoonsMenu,
} from './cartoons.json';
import {
  filmsGenreFirstColumn,
  filmsGenreSecondColumn,
  filmsYears,
  filmsCountryes,
  filmsMenu,
} from './films.json';
import {
  seriesGenreFirstColumn,
  seriesGenreSecondColumn,
  seriesYears,
  seriesCountryes,
  seriesMenu,
} from './series.json';
import { LinkBlock } from './LinkBlock';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.root}>
          <div className={styles.root__left}>
            <img className={styles.root__left__logo} src={logo2.src} alt="logo" />
            <nav>
              <ul className={styles.root__left__mainUl}>
                <li>
                  <Link className={styles.root__left__mainUl__mainLink} href="#">
                    Мой Иви
                  </Link>
                </li>
                <li>
                  <Link className={styles.root__left__mainUl__mainLink} href="#">
                    Что нового
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link href="#" className={styles.root__left__mainUl__mainLink}>
                    Фильмы
                  </Link>
                  <LinkBlock
                    genreFirstColumn={filmsGenreFirstColumn}
                    genreSecondColumn={filmsGenreSecondColumn}
                    years={filmsYears}
                    countryes={filmsCountryes}
                    menu={filmsMenu}
                  />
                </li>
                <li>
                  {' '}
                  <Link href="#" className={styles.root__left__mainUl__mainLink}>
                    Сериалы
                  </Link>
                  <LinkBlock
                    genreFirstColumn={seriesGenreFirstColumn}
                    genreSecondColumn={seriesGenreSecondColumn}
                    years={seriesYears}
                    countryes={seriesCountryes}
                    menu={seriesMenu}
                  />
                </li>
                <li>
                  <Link href="#" className={styles.root__left__mainUl__mainLink}>
                    Мультфильмы
                  </Link>
                  <LinkBlock
                    genreFirstColumn={cartoonsGenreFirstColumn}
                    genreSecondColumn={cartoonsGenreSecondColumn}
                    years={cartoonsYears}
                    countryes={cartoonsCountryes}
                    menu={cartoonsMenu}
                  />
                </li>
                <li>
                  <Link href="#" className={styles.root__left__mainUl__mainLink}>
                    TV+
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.root__right}>
            <Link href="#">
              <Button title="Оплатить подписку" />
            </Link>

            <Link href="#" className={styles.root__right__search}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
              </svg>
              Поиск
            </Link>
            <Link href="#">
              <svg
                className={styles.root__right__bell}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.3 22.247c-1.167-1.419-2.765-3.429-2.765-5.48v-6.53c0-5.625-4.207-10.202-9.584-10.202-5.378 0-9.552 4.577-9.552 10.202v6.53c0 2.016-1.734 3.921-2.833 5.4-0.989 1.328-1.77 2.378-1.242 3.427 0.463 0.923 1.624 1.041 2.583 1.041h5.73c0.002 2.944 2.389 5.331 5.333 5.331s5.333-2.386 5.334-5.331h5.864c0.61 0 2.036 0 2.527-1.038 0.495-1.050-0.297-2.016-1.395-3.351zM15.969 29.871c-1.788 0-3.239-1.448-3.241-3.235h6.482c-0.003 1.787-1.452 3.235-3.241 3.235zM27.168 24.506h-22.262c-0.153 0-0.281-0.005-0.386-0.012 0.206-0.319 0.508-0.727 0.755-1.058 1.218-1.637 3.255-3.949 3.255-6.669v-6.53c0-4.452 3.22-8.073 7.423-8.073s7.455 3.622 7.455 8.073v6.53c0 2.813 1.878 5.164 3.249 6.832 0.231 0.281 0.507 0.617 0.722 0.905-0.064 0.002-0.134 0.003-0.209 0.003z"></path>
              </svg>
            </Link>
            <Link href="#">
              <svg
                className={styles.root__right__lk}
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" />
                <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
