const flatReducer = (state, action) => {
    if (state === undefined) {
        return [];
      }
    switch (action.type){

        case 'SET_FLATS':
            return action.payload;

        default:
            return state;
    };
};

export default flatReducer;
