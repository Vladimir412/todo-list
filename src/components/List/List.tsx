import { FC, ReactNode, ReactComponentElement } from "react";
import styles from './List.module.css';

const List: FC< {title: string, children: ReactNode }> = ({ children, title }) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <ul>{children}</ul>
    </div>
  );
};

export default List;
