const Connect = () => {
    return (
        <div className='page' id='connect-page'>
            <h1 id='connect-page-title'>Connect With Me</h1>
            <form id='connect-page-form'>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name'></input>
                <label for='email'>Email:</label>
                <input type='email' id='email' name='email'></input>
                <label for='message'>Message:</label>
                <input type='text' id='message' name='message'></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Connect;