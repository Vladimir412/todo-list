import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import styles from "./Element.module.css";
import { deleteTask, changeStatusTask } from "../../Services/Reducers/redusers";

type TTask = {
  task: string,
  id: string,
  status?: string
};

  const Element: FC<TTask> = ({ task, id }) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.tasks);

  const deleteElement = () => {
      let newArr: any = [];
      data.forEach((i) => {
        console.log(id);
        if (i.id !== id) newArr.push(i);
      });
      dispatch(deleteTask(newArr));
  };

  const changeStatus = () => {
      dispatch(changeStatusTask(id))
  }

  return (
    <div className={styles.container} id={id}>
      <p className={styles.task}>{task}</p>
      <button className={styles.button} onClick={deleteElement} type="button">
        Delete
      </button>
      <button className={styles.button} onClick={changeStatus} type="button">
        Change status
      </button>
    </div>
  );
};

export default Element;
