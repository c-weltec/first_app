import { useEffect, useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  console.log("inputRef", inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Ref example</h2>
    </>
  );
};

export default RefExample;
