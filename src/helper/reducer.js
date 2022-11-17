let data = [];
const initialState = {
  List: data,
  selection: data[0],
  loaded: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        List: action.payload,
        selection: action.payload[0],
      };
    case "changeSelection":
      return {
        ...state,
        selection: action.data,
      };
    case "changeLoaded":
      return {
        ...state,
        loaded: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
