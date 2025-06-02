"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'


export default function Form() {
    const [state, handleSubmit] = useForm("mkgbnjeo")

    if (state.succeeded) {
        return <p>Thanks for contacting us! We will get in touch with you shortly.</p>;
    }
    return (
        <>
       
        <div className="flex flex-col md:flex-row contactForm w-full mx-auto p-5">
        
        <div className="w-full md:w-1/3 mx-auto mb-10">
            <form onSubmit={handleSubmit} className="">
            {/* <input name="subject" value={subject} className="hidden" readOnly/> */}
                <div className="w-full flex flex-col justify-between">
                    <label htmlFor="name">
                        Name
                        </label>
                        <input
                        id="name"
                        type="text" 
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full"
                        />
                        <ValidationError 
                        prefix="Name" 
                        field="firstName"
                        errors={state.errors}
                        />
                    <label htmlFor="email">
                    Email Address
                    </label>
                    <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email'
                    className="w-full"
                    required
                    />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                    <label htmlFor="company">
                    Company Name
                    </label>
                    <input
                    id="company"
                    type="company" 
                    name="company"
                    placeholder='Company Name'
                    className="w-full"
                    required
                    />
                    <ValidationError 
                    prefix="company" 
                    field="company"
                    errors={state.errors}
                    />
                    <label htmlFor="message">
                    Message 
                    </label>
                    <textarea
                    id="message"
                    rows={10}
                    cols={50}
                    name="message"
                    placeholder='Message'
                    className="w-full"
                    required
                    />
                    <ValidationError 
                    prefix="message" 
                    field="message"
                    errors={state.errors}
                    />
                </div>
                <button type="submit" disabled={state.submitting} className="button">
                <span className="copy uppercase">Submit</span>
                </button>
            </form>
        </div>


    </div>
        
        </>
       
    );
  }