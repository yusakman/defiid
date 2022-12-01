export const protocols = (state = {}, action) => {
  switch (action.type) {
    case "PROTOCOLS_LOADED":
      return { ...state, protocols: action.protocols };
    case "CURRENCY_LOADED":
      return { ...state, currency: action.currency };
    case "YIELDS_LOADED":
      return {...state, yields: action.yields};
    default:
      return state;
  }
};
