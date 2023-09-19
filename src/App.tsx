import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const 꺼내온값 = useSelector((state: any) => state.plus); // 'plus' 상태를 선택
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
      {꺼내온값}
    </>
  );
};

export default App;
