import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import styles from "./Element.module.css";
import { deleteTask, changeStatusTask } from "../../Services/Reducers/redusers";

type TTask = {
  task: string,
  id: string,
  status?: string,
};

  const Element: FC<TTask> = ({ task, id }) => {
  const dispatch = useAppDispatch();

  const deleteElement = () => {
      dispatch(deleteTask(id));
  };

  const changeStatus = () => {
      dispatch(changeStatusTask(id))
  }

  return (
    <li className={styles.container} key={id}>
      <p className={styles.task}>{task}</p>
      <button className={styles.button} onClick={deleteElement} type="button">
        Delete
      </button>
      <button className={styles.button} onClick={changeStatus} type="button">
        Change status
      </button>
    </li>
  );
};

export default Element;
