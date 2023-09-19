import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const val = useSelector((state: any) => state.plus);
  const dispatch = useDispatch();

  return (
    <>
      <h1>hello</h1>
      <button
        onClick={() => {
          dispatch({ type: '+' });
        }}
      >
        +
      </button>
      {val}
    </>
  );
};

export default App;
