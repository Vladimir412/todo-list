import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./App.module.css";
import { useAppDispatch } from "./utils/hooks";
import { addNewTask } from "./Services/Reducers/redusers";
import ListsContainer from "./components/ListsContainer/ListsContainer";
import { v4 as uuidv4} from 'uuid';

function App() {
  const dispatch = useAppDispatch()
  const [inputs, setInputs] = useState('');  

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {    
    setInputs(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addNewTask({task: inputs, id: uuidv4(), status: 'todo'}))
    setInputs('')
  };

  const disabledButton = inputs.length === 0 ? true : false

  return (
    <div className={styles.App}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} name="task" value={inputs} onChange={onChange} type="text" />
          <button className={styles.button} type="submit" disabled={disabledButton}>Add</button>
        </form>
      </div>
      <ListsContainer />
    </div>
  );
}

export default App;
