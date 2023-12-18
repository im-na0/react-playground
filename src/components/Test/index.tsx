import { useState, useDeferredValue, useMemo } from "react";
const Test = () => {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  // value를 먼저 업데이트
  console.log("value: " + value);
  // deferredValue 값은 지연된다
  console.log("deferredValue:", deferredValue);

  const boxes = useMemo(() => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {new Array(10000).fill(null).map(() => {
          const x = Math.floor(Math.random() * 256);
          const y = Math.floor(Math.random() * 256);
          const z = Math.floor(Math.random() * 256);
          const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
          return <div style={{ width: 100, height: 100, backgroundColor }} />;
        })}
      </div>
    );
  }, [deferredValue]);

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        style={{ height: 100 }}
      />
      {boxes}
    </div>
  );
};

export default Test;
