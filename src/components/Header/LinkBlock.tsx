import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import logo3 from './logo3.jpg';
import { Button } from '../UI/Button';
type Links = {
  name: string;
  link: string;
};
type LinkBlockProps = {
  genreFirstColumn: Links[];
  genreSecondColumn: Links[];
  years: Links[];
  countryes: Links[];
  menu: Links[];
};

export const LinkBlock: React.FC<LinkBlockProps> = ({
  genreFirstColumn,
  genreSecondColumn,
  years,
  countryes,
  menu,
}) => {
  const baseUrl = 'https://www.ivi.ru/movies';
  return (
    <div className={styles.root__left__block}>
      <div className={styles.root__left__block__leftside}>
        <ul>
          <p>Жанры</p>
          <div className={styles.root__left__genre}>
            <div className={styles.root__left__genre__firstcolumn}>
              {genreFirstColumn.map((item) => (
                <li>
                  <Link href={baseUrl + item.link}>{item.name}</Link>
                </li>
              ))}
            </div>
            <div className={styles.root__left__genre__secondcolumn}>
              {genreSecondColumn.map((item) => (
                <li>
                  <Link href={baseUrl + item.link}>{item.name}</Link>
                </li>
              ))}
            </div>
          </div>
        </ul>
        <div className={styles.root__left__countryandyears}>
          <ul>
            <p>Страны</p>
            {countryes.map((item) => (
              <li>
                <Link href={baseUrl + item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <p>Годы</p>
            {years.map((item) => (
              <li>
                <Link href={baseUrl + item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.root__left__rightblock}>
        <ul>
          {menu.map((item) => (
            <li>
              <Link href={baseUrl + item.link}> {item.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <div className={styles.root__left__block__animation}>
            <div className={styles.root__left__block__animation__slider}>слайдер</div>
            <div className={styles.root__left__block__animation__logoplustext}>
              <img src={logo3.src} alt="" />
              <div>
                <span>Подписка Иви</span>
                <p>от 190 р за месяц</p>
              </div>
            </div>
            <div className={styles.root__left__block__animation__podpiska}>
              <Button title="Подключить" />
              <p className={styles.root__left__block__animation__podpiska__off}>
                Отключить можно в любой момент
              </p>
            </div>
          </div>
          <div className={styles.root__left__block__smartTv}>
            <Link href="#">Смотреть на smartTv</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
