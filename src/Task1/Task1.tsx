import { Fragment, memo, useCallback } from "react";

// Для создания функции makeLog необходимо использовать useCallback, он позволяет возвращать ту же самую функцию. useCallback
// предотвращает ненужный ререндеринг дочернего компонента, даже если родитель перерендерился.
// Без useCallback makeLog функция пересоздавалась бы при каждом рендеренге MainComponent, вызывая повторный рендеринг дочернего компонента, даже если его props не изменились.

const MainComponent = () => {
  const makeLog = useCallback(() => console.log("hi from MainComponent"), []);

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }: Props) => {
  return <button onClick={makeLog}>say Hi from ChildComponent</button>;
});

type Props = {
  makeLog: () => void;
};

export default MainComponent;
