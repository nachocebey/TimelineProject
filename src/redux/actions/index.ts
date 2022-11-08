import { ActionType } from '../action-types'

interface AddAction {
	type: ActionType.ADD;
	payload: number;
}

export type Action = AddAction;
