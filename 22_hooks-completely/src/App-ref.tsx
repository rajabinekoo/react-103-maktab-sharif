import { useEffect, useRef, useState } from "react";

function Counter() {
  const count = useRef<number>(0);

  const increase = () => {
    count.current++;
    console.log(count);
  };

  // not working
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <>
      <div>
        <button onClick={increase}>
          <span>increase</span>
        </button>
      </div>
      {/* not working */}
      {/* <p>{count.current}</p> */}
    </>
  );
}

// custom hook
function useOutsideAlerter(
  ref: React.MutableRefObject<HTMLInputElement | null>,
  setQueryMode: (_: boolean) => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current?.blur();
        setQueryMode(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

function SearchInput() {
  const [queryMode, setQueryMode] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  useOutsideAlerter(searchInputRef, setQueryMode);

  useEffect(() => {
    window.onkeyup = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "q") setQueryMode(true);
      else if (e.key.toLowerCase() === "escape") setQueryMode(false);
    };
  }, []);

  useEffect(() => {
    if (queryMode) searchInputRef.current?.focus();
    else searchInputRef.current?.blur();
  }, [queryMode]);

  return (
    <input
      ref={searchInputRef}
      type="text"
      placeholder="search something ..."
    />
  );
}

function App() {
  return <SearchInput />;
}

export default App;
