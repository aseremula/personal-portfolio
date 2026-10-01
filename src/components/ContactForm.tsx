// This is one version of a contact component that serves as a call to action via displaying a form and the user's social media handles. Successfully submitting the form sends it directly to the user's email address, containing all the information or context needed by the user in a consistent format for a project request. While this design guides clients through writing and sending emails to the user without leaving the page, it may not be ideal for clients who view forms as cumbersome or less trustworthy. As clients also do not get a copy of their sent message and are therefore left "waiting in the dark," it may be a good idea to send confirmation emails!

import { useState, type FormEvent } from 'react';
import ContactFormLink from './ContactFormLink';

// From: https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler
// Tell Typescript directly the types of elements present in the form - the name of each element is the same as its ID in the form
interface FormElements extends HTMLFormControlsCollection {
  full_name: HTMLInputElement
  email: HTMLInputElement
  message: HTMLTextAreaElement
}

// Extend HTMLFormElement and override the elements to have the elements we want it to, preventing unneeded typecasting
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function ContactForm() {
  const [isHovered, setIsHovered] = useState(false);

  // As this component is a demo, submissions only output to the console. It is up to the user to decide how to process incoming messages!
  function handleContactForm(e: FormEvent<ContactFormElement>)
  {
    e.preventDefault();
    
    const fullNameInput = e.currentTarget.elements.full_name.value;
    const emailInput = e.currentTarget.elements.email.value;
    const messageInput = e.currentTarget.elements.message.value;
    console.log(fullNameInput, emailInput, messageInput);
    
    // Clear the form
    e.currentTarget.reset();
  }

  return (
    // <section id="contactForm" className="font-(family-name:--THICCCBOI-Medium) pt-[80px] pb-[90px] md:pt-[100px] md:pb-[110px] mdish:py-[160px] 3xl:py-[200px]"> // has original padding values
    <section id="contactForm" className="font-(family-name:--THICCCBOI-Medium) pt-[80px] pb-[50px] md:pt-[100px] md:pb-[60px] mdish:py-[100px] 3xl:py-[170px]">
      <div className="flex flex-col lg:flex-row items-stretch px-[16px] xs:px-[24px] items-stretch lg:items-start max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <div className="grid grid-cols-[1fr] mdish:grid-cols-[1fr_1.1fr] 3xl:grid-cols-[1fr_1.05fr] grid-rows-[auto] auto-cols-[1fr] gap-x-[40px] 3xl:gap-x-[54px] gap-y-[50px] mdish:gap-y-[16px]">
          {/* Call to action and social media handles */}
          <div>
            <h1 className="text-(--neutral-800) text-[42px] leading-[54px] xs:text-[40px] xs:leading-[52px] md:text-[60px] md:leading-[70px] 3xl:text-[90px] 3xl:leading-[104px] max-w-[940px] 3xl:max-w-[1064px] mb-[24px]">Get in touch</h1>
            <p className="text-(--neutral-600) text-[18px] leading-[30px] md:text-[22px] md:leading-[36px] 3xl:text-[24px] 3xl:leading-[42px]">Lorem ipsum dolor sit amet consectetur adipsicing elit mattis faucibus odio feugiat arc dolor.</p>
            <div className="mt-[40px] 3xl:mt-[56px] grid grid-cols-[auto_1fr] xs:grid-cols-[1fr_1fr_1fr] mdish:grid-cols-[auto_1fr] auto-cols-[1fr] grid-rows-[auto] gap-x-[40px] 3xl:gap-x-[114px] gap-y-[40px] mdish:gap-y-[24px] 3xl:gap-y-[32px]">
              <ContactFormLink destination="https://www.google.com" text="Facebook" includeUnderline={true} animateUnderline={true}/>
              <ContactFormLink destination="https://www.google.com" text="LinkedIn" includeUnderline={true} animateUnderline={true}/>
              <ContactFormLink destination="https://www.google.com" text="Twitter" includeUnderline={true} animateUnderline={true}/>
              <ContactFormLink destination="https://www.google.com" text="Dribbble" includeUnderline={true} animateUnderline={true}/>
              <ContactFormLink destination="https://www.google.com" text="Instagram" includeUnderline={true} animateUnderline={true}/>
              <ContactFormLink destination="https://www.google.com" text="Behance" includeUnderline={true} animateUnderline={true}/>
            </div>
          </div>
          
          {/* Form */}
          <div className="mb-[15px]">
            <form className="text-(--neutral-700) text-[18px] leading-[20px] md:text-[20px] md:leading-[22px] 3xl:text-[24px] 3xl:leading-[26px]" id="contact_form" action="" method="POST" onSubmit={handleContactForm}>
              <div>
                <div>
                  <label className="aria-invisible" htmlFor="full_name">Full name</label>
                  <input className="darkenBottomBorderDirect textColorDarken_700To800 max-h-[38px] w-[100%] mb-[40px] md:mb-[52px] 3xl:mb-[76px] pt-[18px] pb-[35px] 3xl:pb-[48px] border-b-[1px] border-b-(--neutral-500)" id="full_name" type="text" name="full_name" placeholder="Full name" maxLength={256} required={true}/>
                </div>

                <div>
                  <label className="aria-invisible" htmlFor="email">Email address</label>
                  <input className="darkenBottomBorderDirect textColorDarken_700To800 max-h-[38px] w-[100%] mb-[40px] md:mb-[52px] 3xl:mb-[76px] pt-[18px] pb-[35px] 3xl:pb-[48px] border-b-[1px] border-b-(--neutral-500)" id="email" type="email" name="email" placeholder="Email address" maxLength={256} required={true}/>
                </div>

                <div>
                  <label className="aria-invisible" htmlFor="message">Tell me about the project</label>
                  <textarea className="darkenBottomBorderDirect textColorDarken_700To800 w-[100%] border-b-[1.5px] border-b-(--neutral-500) mb-[10px] pb-[80px] 3xl:pb-[136px] pt-[8px] overflow-auto resize" id="message" name="message" placeholder="Tell me about the project" maxLength={5000} required={true}></textarea>
                </div>
              </div>

              {/* Submit button */}
              <button className="cursor-pointer mt-[30px]" type="submit" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
                <div className="flex gap-1 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] md:text-[22px] md:leading-[24px] 3xl:text-[28px] 3xl:leading-[32px]">
                  <p>Submit message</p>
                  <svg className={`w-[23px] h-[23px] xs:w-[24px] xs:h-[24px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
                </div>

                <hr className={`border-1 border-(--neutral-800) mt-[8px] ${(isHovered) ? "grow" : "shrink"}`}/>
              </button>
            </form>

            {/* Success message */}
            {/* <div className="bg-(--neutral-800) text-(--neutral-100) text-center px-[20px] py-[32px] text-[18px] leading-[30px] 3xl:text-[20px] 3xl:leading-[36px]">
              <p>
                Your message has been submitted.<br />
                I will get back to you within 24-48 hours.
              </p>
            </div> */}

            {/* Error message */}
            {/* <div className="bg-(--error-bg) text-(--error-text) text-center mt-[18px] px-[19px] py-[18px] text-[18px] leading-[30px] 3xl:text-[20px] 3xl:leading-[36px]">
              <p>Oops! Something went wrong while submitting the form.</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;