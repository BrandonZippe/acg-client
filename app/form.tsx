"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'


export default function Form() {
    const [state, handleSubmit] = useForm("xleqqyog")

    if (state.succeeded) {
        return <p>Thanks for contacting us! We will get in touch with you shortly.</p>;
    }
    return (
        <>
       
        <div className="flex flex-col md:flex-row">
        
        <div className="w-3/5">
            <form onSubmit={handleSubmit} className="">
            {/* <input name="subject" value={subject} className="hidden" readOnly/> */}
        
                <div className="">
                    <div className="w-full flex flex-row justify-between">
                        <label htmlFor="firstName">
                        First Name
                        </label>
                        <input
                        id="firstName"
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="md:w-1/2 mr-1"
                        />
                        <ValidationError 
                        prefix="First Name" 
                        field="firstName"
                        errors={state.errors}
                        />
                        <label htmlFor="lastName">
                        Last Name
                        </label>
                        <input
                        id="lastName"
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="md:w-1/2"
                        />
                        <ValidationError 
                        prefix="Last Name" 
                        field="lastName"
                        errors={state.errors}
                        />
                    </div>
                </div>


        
        <div className="">
            <div className="w-full flex flex-row justify-between">
                <label htmlFor="email">
                Email Address
                </label>
                <input
                id="email"
                type="email" 
                name="email"
                placeholder='Email'
                className="w-full md:w-1/2 mr-1"
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
                className="w-full md:w-1/2"
                required
                />
                <ValidationError 
                prefix="company" 
                field="company"
                errors={state.errors}
                />
            </div>
        </div>

        <div className="">
            <div className="w-full flex flex-row justify-between">
                <label htmlFor="school">
                School 
                </label>
                <input
                id="school"
                type="text" 
                name="school"
                placeholder='School'
                className="w-full md:w-1/2"
                required
                />
                <ValidationError 
                prefix="school" 
                field="school"
                errors={state.errors}
                />
            </div>
        </div>



        <button type="submit" disabled={state.submitting} className="button-orange my-6">
          <span className="copy uppercase">Submit</span>
        </button>
      </form>
    </div>


        </div>
        
        </>
       
    );
  }