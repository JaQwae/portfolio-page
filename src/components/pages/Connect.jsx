const Connect = (theme) => {
    return (
        <div className='page' id='connect-page'>
            <h1 id='connect-page-title'>Connect With Me</h1>
            <form id={`connect-page-form-${theme.theme}`} className='connect-form-layout'>
                <section class='contact-form-two-box-row-container'>
                    <div class='form-sections'>
                        <input type='text' id='fname' name='fname'></input>
                        <label htmlFor='fname'>First name</label>
                    </div>
                    <div class='form-sections'>
                        <input type='text' id='lname' name='lname'></input>
                        <label htmlFor='lname'>Last name</label>
                    </div>
                </section>
                <section class='contact-form-two-box-row-container'>
                    <div class='form-sections'>
                        <input type='email' id='email' name='email'></input>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div class='form-sections'>
                        <input type='text' id='phone-number' name='phone-number'></input>
                        <label htmlFor='phone-number'>Phone</label>
                    </div>
                </section>
                <section class='form-sections'>
                    <input type='text' id='message' name='message'></input>
                    <label htmlFor='message'>Message</label>
                    <input type="submit" value="Submit"></input>
                </section>
            </form>
        </div>
    )
}

export default Connect;