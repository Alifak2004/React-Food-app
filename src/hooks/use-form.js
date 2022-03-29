import { useEffect, useReducer } from 'react';

let init = true;

const initState = {
	isTouched: false,
	inputValue: '',
	error: null,
};

const ReducerFunc = (state = initState, action) => {
	switch (action.type) {
		case 'BLUR': {
			return { ...state, isTouched: true };
		}
		case 'CHANGE': {
			return { ...state, inputValue: action.payload };
		}
		case 'ERROR': {
			return { ...state, error: action.payload };
		}
		case 'CLEAR': {
			console.log('CLEARED');
			return { isTouched: false, inputValue: '', error: null };
		}
		default: {
			return state;
		}
	}
};
const useHttp = (verif, errorMassage) => {
	const [state, dispatchInputState] = useReducer(ReducerFunc, initState);

	const isNotValid = verif(state.inputValue);
	const InputIsValid = state.isTouched == true && isNotValid == false;
	const InputIsNotValid = state.isTouched == true && isNotValid == true;

	useEffect(() => {
		if (init == true) {
			init = false;
			return;
		}

		if (verif(state.inputValue) && state.isTouched) {
			dispatchInputState({ type: 'ERROR', payload: errorMassage });
		} else {
			dispatchInputState({ type: 'ERROR', payload: null });
		}
	}, [state.isTouched, isNotValid]);

	const onBlurHandler = () => {
		dispatchInputState({ type: 'BLUR' });
	};

	const onChangeHandler = (e) => {
		dispatchInputState({ type: 'CHANGE', payload: e.target.value });
	};
	const clearAllState = () => {
		dispatchInputState({ type: 'CLEAR' });
	};

	return {
		value: state.inputValue,
		errorMassage: state.error,
		onBlurHandler,
		onChangeHandler,
		InputIsValid,
		InputIsNotValid,
		clearAllState,
	};
};

export default useHttp;
