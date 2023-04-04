import React,  { useRef } from 'react'
import Typical from 'react-typical'
import emailjs from 'emailjs-com'

import ScreenHeading from '../ScreenHeading/ScreenHeading'
import './Contact.css'
export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bbam6cc', 'template_kdu3wdy', form.current, 'lRun8pSmSPVnASeoT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (


    <div className='main-container'  id='contact'> 

        <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"}/> 
        <div className='central-form'> 
            <div className='col'> 
               <h2 className='title'>

                    <Typical
                        loop={Infinity}
                        steps={[
                            "Get In Touch ...",
                              
                            1000,
                            "Send Me a Message 📧",
                            1000,
                        ]}
                    
                    />

               </h2>
            </div>
            <div className='back-form'>
                        <form ref={form} onSubmit={sendEmail}> 
                            <p>  </p>
                            <label htmlFor='name'>  </label>
                            <input type='text'
                             name="name"
                            placeholder="Your  Name" required
                            />

                            <label htmlFor='email'>  </label>
                            <input type='email'
                             name="email"
                             placeholder="Your E-mail" required />

                            <label htmlFor='message'> </label>
                            <textarea type='text'
                             name="message"
                             placeholder="Your Message" rows="7" required/>


                            <div className='sned-btn'>
                                <button type='submit' > 
                                    send <i className='fa fa-paper-plane'/>
                                </button> 

                            </div>
                        </form>
            </div>
        </div>
    </div>
  )
}
