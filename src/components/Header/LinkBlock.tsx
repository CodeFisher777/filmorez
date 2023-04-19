import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

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
              <Link href={baseUrl + item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div>какая-то дичь</div>
      </div>
    </div>
  );
};
