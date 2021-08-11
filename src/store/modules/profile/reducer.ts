import { Reducer } from 'redux';

const profile: Reducer = (state: [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_PEOPLE_IN_PROFILE': {
      console.log(action.payload);

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
export default profile;
