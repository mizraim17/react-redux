const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "findSuggestion": {
      return [
        {
          id: 1,
          title: "findSuggestion"
        }
      ];
    }
    default:
      return state;
  }
};

export default reducer;
