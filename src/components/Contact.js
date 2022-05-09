import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_afmus93',
        'template_d3hjq36',
        form.current,
        'bParxth-cIkAYOA0P'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#284B63] flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="pb-3">
          <p className="text-4xl font-bond inline border-b-4 border-[#D9D9D9] text-[#FFFFFF]">
            Contact Me
          </p>
          <p className="text-[#FFFFFF] pt-6 pb-4">
            I'd love to connect! Feel free to reach out about anything -
            employment, networking, or collaborating!{' '}
          </p>
          <p className="text-[#FFFFFF] pt-5">Submit Form Below:</p>
        </div>
        <input
          className="bg-[#D9D9D9] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#D9D9D9]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#D9D9D9] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#3C6E71] hover:border-[#FFFFFF] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
