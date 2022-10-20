import useInput from "../hooks/use-input";

const SimpleInput = () => {
    const {
        enteredValue:enteredName,
        valueIsValid:enterNameIsValid,
        valueIsInvalid:inputIsInvalid,
        valueChangeHandler:inputValueChangeHandler,
        fieldBlurHandler:inputBlurHandler,
        fieldClasses:inputClassNames,
        resetState:resetName

    } = useInput(value => value.trim() !== '');
    const {
        enteredValue:enteredEmail,
        valueIsValid:enterEmailIsValid,
        valueIsInvalid:emailIsInValid,
        valueChangeHandler:emailValueChangeHandler,
        fieldBlurHandler:emailBlurHandler,
        fieldClasses:emailClassNames,
        resetState:resetEmail
    } = useInput(value => value.includes('@'));

    let formIsValid = false;


    if (enterNameIsValid && enterEmailIsValid){
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

       if (!enterNameIsValid || !enterEmailIsValid){
           return;
       }
        resetName();
        resetEmail();
        console.log(enteredName);
        console.log(enteredEmail);

   }


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
        {inputIsInvalid && <p className='error-text'>Cant submit invalid name.</p>}
      </div>
        <div className={emailClassNames}>
            <label htmlFor='email'>Your Email</label>
            <input
                value={enteredEmail}
                onBlur={emailBlurHandler}
                onChange={emailValueChangeHandler}
                type='email'
                id='email'
            />
            {emailIsInValid && <p className='error-text'>Cant submit invalid email.</p>}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
