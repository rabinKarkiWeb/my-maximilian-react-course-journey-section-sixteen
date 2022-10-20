import {useState} from "react";
const useInput = (fieldValidityFn) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [fieldIsTouched,setFieldIsTouched] = useState(false);

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	}

	const fieldBlurHandler = () => {
		setFieldIsTouched(true);
	}


	const resetState = () => {
		setFieldIsTouched(false);
		setEnteredValue('');
	}

	const valueIsValid = fieldValidityFn(enteredValue);

	const valueIsInvalid = !valueIsValid && fieldIsTouched;

	const fieldClasses = valueIsInvalid ? 'form-control invalid' : 'form-control';


	return {
		enteredValue,
		valueIsValid,
		valueIsInvalid,
		valueChangeHandler,
		fieldBlurHandler,
		fieldClasses,
		resetState
	}
}
export default useInput;