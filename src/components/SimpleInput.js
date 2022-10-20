import { useState} from "react";

const SimpleInput = () => {
   const [enteredName, setEnteredName] = useState('')
   const [inputIsTouched,setInputIsTouched] = useState(false);

   const enterNameIsValid = enteredName.trim() !== '';
    const inputIsInvalid = !enterNameIsValid && inputIsTouched;
    let formIsValid = false;
    if (enterNameIsValid){
        formIsValid = true;
    }

    const inputValueChangeHandler = (event) => {
       setEnteredName(event.target.value);
   }

   const inputBlurHandler = () => {
       setInputIsTouched(true);
   }

    const submitHandler = (event) => {
        event.preventDefault();
        setInputIsTouched(true);
       if (!enterNameIsValid){
           return;
       }

       console.log(enteredName);
       setInputIsTouched(false);
       setEnteredName('');
   }
   const inputClassNames = inputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={inputClassNames}>
        <label htmlFor='name'>Your Name</label>
        <input
            value={enteredName}
            onBlur={inputBlurHandler}
            onChange={inputValueChangeHandler}
            type='text'
            id='name'
        />
        {inputIsInvalid && <p className='error-text'>Cant submit empty as name.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
