import useInput from "../hooks/use-input";

const BasicForm = () => {

    const {
        enteredValue:first,
        valueIsValid:firstIsValid,
        valueIsInvalid:firstIsInvalid,
        valueChangeHandler:firstChangeHandler,
        fieldBlurHandler:firstBlurHandler,
        fieldClasses:firstClasses,
        resetState:resetFirst
    } = useInput(value => value.trim() !== '');

    const {
        enteredValue:last,
        valueIsValid:lastIsValid,
        valueIsInvalid:lastIsInvalid,
        valueChangeHandler:lastChangeHandler,
        fieldBlurHandler:lastBlurHandler,
        fieldClasses:lastClasses,
        resetState:resetLast
    } = useInput(value => value.trim() !== '');

    const {
        enteredValue:email,
        valueIsValid:emailIsValid,
        valueIsInvalid:emailIsInvalid,
        valueChangeHandler:emailChangeHandler,
        fieldBlurHandler:emailBlurHandler,
        fieldClasses:emailClasses,
        resetState:resetEmail
    } = useInput(value => value.includes('@'));

    const submitHandler = (event) => {
        event.preventDefault()
        if (!firstIsValid || !lastIsValid || !emailIsValid){
            return;
        }
        console.log(first,last,email);
        resetLast();
        resetEmail();
        resetFirst();
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' onChange={firstChangeHandler} onBlur={firstBlurHandler} value={first} id='name' />
            {firstIsInvalid && <p>invalid field</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor='nameL'>Last Name</label>
          <input type='text' onChange={lastChangeHandler} onBlur={lastBlurHandler} value={last} id='nameL' />
            {lastIsInvalid && <p>invalid field</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} id='email' />
          {emailIsInvalid && <p>invalid field</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!firstIsValid || !lastIsValid || !emailIsValid }>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
