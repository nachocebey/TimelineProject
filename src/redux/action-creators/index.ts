import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const add = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.ADD,
			payload: amount,
		});
	};
};
