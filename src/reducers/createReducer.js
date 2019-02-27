import ACTIONS from "./../actions/createActions";

const defaultState = {
  items: []
};

const create = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: 
    case ACTIONS.Types.DELETE_ITEM: 
    default:
      return state;
  }
};

export default create;