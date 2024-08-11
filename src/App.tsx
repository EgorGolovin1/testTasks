import "./App.css";
import FirstTask from "./Task1/Task1";
import ClassCounter from "./Task2/Task2";
import { useTrasformData } from "./Task3/useTransformArray";
function App() {
  const inputData: PropsElementsArray[] = [
    [
      ["id", 1],
      ["name", "Ivan"],
      ["age", 23],
    ],
    [
      ["id", 2],
      ["name", "Maria"],
      ["age", 30],
    ],
    [
      ["id", 332],
      ["name", "Anna"],
      ["age", 28],
    ],
  ];

  const data = useTrasformData(inputData);
  return (
    <>
      <h1>Hello «ТехАудит» team!</h1>
      {data.map((item) => {
        return (
          <div key={item.value}>
            <p>{item.label}</p>
            <p>{item.value}</p>
          </div>
        );
      })}
      <FirstTask />
      <ClassCounter count={13} />
    </>
  );
}
export type PropsElement = [string | number, string | number];
// Define UserArray as an array of UserData
export type PropsElementsArray = PropsElement[];
// export type UserArray = [string | number, string | number][];

export default App;
