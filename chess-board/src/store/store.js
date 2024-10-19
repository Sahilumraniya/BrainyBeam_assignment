import { createStore } from 'redux';

const initialState = {
    squares: Array(8).fill(null).map((_, i) => {
        if (i % 2 === 0) {
            return Array(8).fill(null).map((_, j) => j % 2 === 0 ? 'white' : 'black');
        } else {
            return Array(8).fill(null).map((_, j) => j % 2 === 0 ? 'black' : 'white');
        }
    }), // Initial colors
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SQUARE':
            const { row, col, color } = action.payload;
            let newColor;
            if (color === 'white') {
                newColor = 'yellow';
            } else if (color === 'black') {
                newColor = 'red';
            } else {
                newColor = color;
            }
            const newSquares = state.squares.map((r, rIdx) =>
                r.map((square, cIdx) => (rIdx === row && cIdx === col ? newColor : square))
            );
            return { ...state, squares: newSquares };
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
