import { EMAIL_CHANGED } from './types';

export const emailChange = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
