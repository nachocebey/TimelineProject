const initialState = {
	counter: 0,
};

type Action = {
	type: string;
	payload: number;
};

export default (state = initialState, { type, payload }: Action) => {
	switch (type) {
		case 'ADD_NUMBER':
			return { ...state, counter: payload };

		default:
			return state;
	}
};
