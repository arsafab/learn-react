import React from 'react';
// import classNames from 'classnames';
import * as styles from './style.css';

interface props {
  src: string;
  title: string;
  releaseDate: string;
  genres: string[];
};

export const MovieItem: React.FC<props> = ({
  src,
  title,
  releaseDate,
  genres = []
}) => {
  return (
    <figure className={styles.item}>
      <a className={styles.image}>
        <img src={src} />
      </a>
      <figcaption className={styles.description}>
        <span className={styles.title}>{ title }</span>
        <span className={styles.releaseDate}>{releaseDate.slice(0, 4)}</span>
        {
          genres.length &&
          (<span>
            {
              genres.map((item: string, i: number) => (
                <span key={`${item}${i}`} className={styles.genre}>
                  { (i === genres.length - 1 ) ? item : `${item} & ` }
                </span>
              ))
            }
          </span>)
        }
      </figcaption>
    </figure>
  )
}
