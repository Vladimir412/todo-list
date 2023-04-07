import styles from "./ListsContainer.module.css";
import List from "../List/List";
import Element from "../Element/Element";
import { useAppSelector } from "../../utils/hooks";

const ListsContainer = () => {
  const { data } = useAppSelector((state) => state.tasks);
  let listTodo = data.filter((item) => item.status === "todo");
  let listDone = data.filter((item) => item.status === "done");

  return (
    <div className={styles.container}>
      <List title="ToDo">
        {listTodo.map((item) => (
          <Element
            key={item.id}
            task={item.task}
            id={item.id}
            status={item.status}
          />
        ))}
      </List>
      <List title="Done">
        {listDone.map((item) => (
          <Element
            key={item.id}
            task={item.task}
            id={item.id}
            status={item.status}
          />
        ))}
      </List>
    </div>
  );
};

export default ListsContainer;
