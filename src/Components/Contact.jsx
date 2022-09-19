import React from 'react';

function Contact(){
    return(
       <div id='contact'>
        <h3>RESERVATION</h3>
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='date' placeholder='Date' />
            <input type='time' placeholder='Time' />
            <input type='text' value='People' />
            <input type='submit' value='BOOK' />
        </form>
       
       </div>
    )
}
export default Contact;