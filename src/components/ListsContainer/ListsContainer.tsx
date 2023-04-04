import styles from "./ListsContainer.module.css";
import List from "../List/List";
import Element from "../Element/Element";
import { useAppSelector } from "../../utils/hooks";
import { TInitialState } from "../../Services/Reducers/redusers";

type TListContainer = {
  task: string,
  id: string,
  status?: string
}

const ListsContainer = () => {
  const { data } = useAppSelector((state) => state.tasks);
  let listTodo: any = []
  let listDone: any = []


  data.forEach((i: TListContainer) => {
    if (i.status === 'todo') {
      listTodo.push(<li key={i.id} className={styles.list}><Element task={i.task} id={i.id} status={i.status} /></li>)
    } else {
      listDone.push(<li key={i.id} className={styles.list}><Element task={i.task} id={i.id} status={i.status} /></li>)
    }
  })

  return (
    <div className={styles.container}>
      <List title="ToDo">{listTodo}</List>
      <List title="Done">{listDone}</List>
    </div>
  );
};

export default ListsContainer;