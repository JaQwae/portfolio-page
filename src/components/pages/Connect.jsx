import {useState} from "react";

const Connect = (theme) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        

        if (inputType === 'fname') {
            setFname(inputValue);
        };
        if (inputType === 'lname') {
            setLname(inputValue);
        };
        if (inputType === 'email') {
            setEmail(inputValue);
        };

        console.log(inputType)
        console.log(inputValue)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!fname) {
            setErrorMessage('Please enter your first name.');
            console.log(errorMessage);
            return;
        } else if (!lname) {
            setErrorMessage('Please enter your last name.');
            console.log(errorMessage);
            return;
        } else if (!email){
            setErrorMessage('Please enter an email.');
            console.log(errorMessage);
            return;
        } else {
            alert(`Hello ${fname} ${lname},thank you for submitting a connection form! I look forward to connecting with you!`);

            setFname('');
            setLname('');
            setEmail('');
            setErrorMessage('');
        }
    }

    return (
        <div className='page' id='connect-page'>
            <h1 id='connect-page-title'>Connect With Me</h1>
            <form id={`connect-page-form-${theme.theme}`} className='connect-form-layout'>
                <section className='contact-form-two-box-row-container'>
                    <div className='form-sections'>
                        <input
                            name='fname' 
                            id='fname'
                            onChange= {handleInputChange}
                            className={`all-input-boxes all-input-boxes-${theme.theme}`}
                            type='text'
                            value= {fname}
                        ></input>
                        <label htmlFor='fname'>First name</label>
                    </div>
                    <div className='form-sections'>
                        <input
                            name='lname'
                            id='lname'
                            onChange= {handleInputChange}
                            className={`all-input-boxes all-input-boxes-${theme.theme}`}
                            type='text'
                            value= {lname}
                        ></input>
                        <label htmlFor='lname'>Last name</label>
                    </div>
                </section>
                <section className='contact-form-two-box-row-container'>
                    <div className='form-sections'>
                        <input 
                            name='email' 
                            id='email'
                            onChange= {handleInputChange}
                            className={`all-input-boxes all-input-boxes-${theme.theme}`}
                            type='email'
                            value = {email}
                        ></input>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='form-sections'>
                        <input 
                            type='text'
                            id='phone-number' 
                            name='phone-number' 
                            className={`all-input-boxes all-input-boxes-${theme.theme}`}>
                        </input>
                        <label htmlFor='phone-number'>Phone</label>
                    </div>
                </section>
                <section className='form-sections'>
                    <textarea 
                        type='text' 
                        id='message' 
                        name='message' 
                        className={`all-input-boxes all-input-boxes-${theme.theme}`}>
                    </textarea>
                    <label htmlFor='message'>Message</label>
                    <button 
                        onClick={handleFormSubmit}
                        value="Submit"
                        type="button" 
                    >Submit</button>
                </section>
                <section className='connect-form-error-message-container'>
                    <p id={`connect-form-error-message-${theme.theme}`}>
                        {errorMessage}
                    </p>
                </section>
            </form>
        </div>
    )
}

export default Connect;