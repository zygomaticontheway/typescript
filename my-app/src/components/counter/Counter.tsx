import { useState } from "react";
import styles from  "./counter.module.css";

function Counter() {
  //должны явно указывать тип данных в useState
  const [count, setCount] = useState<number>(0);

  const handlePlus = (): void => {
    setCount(prev => prev + 1);
  };

  const handleMinus = (): void => {
    setCount(prev => prev - 1);
  };

  return (
    <div className={styles.counterValue}>
      <h4>Counter 💯</h4>
      <div>
        <button onClick={handleMinus}>-</button>
        <span className="counterValue"> {count} </span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default Counter;