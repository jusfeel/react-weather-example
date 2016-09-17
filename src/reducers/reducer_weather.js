import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// never state.push
			// this creates new array, so we avoid mutate state
			// return state.concat([action.payload.data]);
			// ... flat array [ES6]
			return [ action.payload.data, ...state ];
	}
	return state;
}
