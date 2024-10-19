import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import './App.css'; // Create a CSS file for styling

const Board = () => {
  const squares = useSelector((state) => state.squares);
  const dispatch = useDispatch();

  const handleClick = (row, col, color) => {
    dispatch({ type: 'TOGGLE_SQUARE', payload: { row, col, color } });
  };

  return (
    <div className="board">
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className={`square ${color}`}
              onClick={() => handleClick(rowIndex, colIndex, color)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Chess Board</h1>
      <Board />
    </div>
  </Provider>
);

export default App;
