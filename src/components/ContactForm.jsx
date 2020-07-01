import React, {useState} from 'react';
import axios from 'axios';

import { ReactComponent as SendIcon } from '../assets/nav_icons/paper-plane-solid.svg';


export default function ContactForm() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmitForm = async(e) => {
        e.preventDefault();

        if (email && message) {
            try {
                const { data } = await axios.post('https://aminecode.herokuapp.com/api/contact/send', {name, email, subject, message});
                if (data.status === 'success') {
                    window.alert('Message successfully sent\n Thank you for reaching out\n I will get back to you as soon as possible');
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    window.alert('Sorry, message failed to send');
                }
            } catch (err) {
                window.alert('Sorry, something went wrong!');
                console.log(err)
                console.dir(err)
            }
        }
    }

    return (
        // <form className='was-validated' onSubmit={handleSubmitForm}>
        <form className='' onSubmit={handleSubmitForm} autoComplete='on'>
            <div className='row md-form px-2 pt-3'>
                <div className='form-group col-sm-3'>
                    <label htmlFor='nameField'> Name:</label>
                    <input 
                        type='text'
                        id='nameField'
                        className='form-control textInput' 
                        placeholder='Name (Optional)' 
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    {/* <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div> */}
                </div>

                <div className='form-group col-sm-4'>
                    <label htmlFor='emailField'> Email: <span className='h6 text-danger font-italic'>(Required)</span></label>
                        <input 
                            type='email'
                            id='emailField'
                            className='form-control textInput' 
                            placeholder='Enter your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>

                <div className='form-group col-sm-5'>
                    <label htmlFor='subjectField'> Subject:</label>
                        <input 
                            type='text'
                            id='subjectField'
                            className='form-control textInput' 
                            placeholder='Subject (Optional)' 
                            value={subject}
                            onChange={e => setSubject(e.target.value)} />
                    {/* <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div> */}
                </div>

                <div className='form-group col-sm-12 px-3'>
                    <label htmlFor='messageField' className='w-100'>Message: 
                        <span className='h6 text-danger font-italic'> (Required)</span></label>
                        <textarea 
                            className='form-control textInput'
                            id='messageField'
                            placeholder='Enter your message here'
                            autoComplete='off'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows='5'
                            required />
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>
            </div>

            <div className='text-right'>
                <button className='btnClear'><SendIcon className='navIcon'/></button>
            </div>
        </form>
    )
}