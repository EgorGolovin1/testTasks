import type { PropsElement, PropsElementsArray } from "../App";

export const useTrasformData: TransformDataFunction = (data) => {
  return data.map((subArray: PropsElement[]) => {
    const obj = Object.fromEntries(
      subArray as Iterable<readonly [PropertyKey]>
    );
    return {
      label: `${obj.name}, ${obj.age}`,
      value: obj.id,
    };
  });
};

type TransformedData = {
  value: number;
  label: string;
};

type TransformDataFunction = (data: PropsElementsArray[]) => TransformedData[];
