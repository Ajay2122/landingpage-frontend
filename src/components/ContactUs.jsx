import React, { useState } from 'react';
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  fullName: (v) => v.trim().length < 2 ? 'Name must be at least 2 characters' : '',
  email: (v) => EMAIL_REGEX.test(v) ? '' : 'Please enter a valid email address',
  subject: (v) => v.trim().length < 3 ? 'Subject must be at least 3 characters' : '',
  message: (v) => v.trim().length < 10 ? 'Message must be at least 10 characters' : '',
};

const INITIAL_FORM = { fullName: '', email: '', subject: '', message: '' };

const ContactUs = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = (key, val) => !rules[key](val);
  const isFormValid = Object.keys(form).every((k) => form[k].trim() && isValid(k, form[k]));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: rules[name](value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: rules[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    const allErrors = Object.fromEntries(Object.keys(form).map((k) => [k, rules[k](form[k])]));
    setTouched(allTouched);
    setErrors(allErrors);
    if (!isFormValid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(INITIAL_FORM);
      setTouched({});
      setErrors({});
    }, 1500);
  };

  const inputBase =
    'w-full px-4 py-2 mt-2 text-white rounded-full bg-transparent formBorder-gradient focus:outline-none focus:ring-0 placeholder:text-gray-500 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(99,24,241,0.5)]';

  return (
    <div id='contact' className='container mx-auto'>
      <div className='lg:flex lg:px-32 gap-x-10'>
        <div className='flex-grow'>
          <section className="w-full bg-gradient-to-l from-[#110D2E]/30 to-[#fc466a4a]/10 rounded-md shadow-md p-16">
            <div className='flex flex-col mb-10 justify-center items-center'>
              <h2 className="text-2xl font-semibold capitalize text-white">Drop Us Your Message</h2>
              <p className='text-gray-400'>Freely contact with us anytime. We're available here for you.</p>
            </div>

            {submitted ? (
              <div className='flex flex-col items-center justify-center gap-4 py-12'>
                <FaCheckCircle size={56} className='text-[#59D3AA]' />
                <p className='text-white text-xl font-semibold'>Message Sent Successfully!</p>
                <p className='text-gray-400 text-center text-sm'>We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className='mt-4 px-6 py-2 rounded-full bg-[#6318F1] text-white hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-200'
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                  <div className='col-span-2 lg:col-span-1'>
                    <input
                      name='fullName'
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      className={inputBase}
                      placeholder='Full Name'
                    />
                    {touched.fullName && errors.fullName && (
                      <p className='text-red-400 text-xs mt-1 pl-4'>{errors.fullName}</p>
                    )}
                  </div>

                  <div className='col-span-2 lg:col-span-1'>
                    <input
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      className={inputBase}
                      placeholder='Your Email'
                    />
                    {touched.email && errors.email && (
                      <p className='text-red-400 text-xs mt-1 pl-4'>{errors.email}</p>
                    )}
                  </div>

                  <div className='col-span-2'>
                    <input
                      name='subject'
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      className={inputBase}
                      placeholder='Subject'
                    />
                    {touched.subject && errors.subject && (
                      <p className='text-red-400 text-xs mt-1 pl-4'>{errors.subject}</p>
                    )}
                  </div>

                  <div className='col-span-2'>
                    <textarea
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='w-full px-6 py-3 mt-2 text-white rounded-3xl bg-transparent formBorder-gradient focus:outline-none focus:ring-0 placeholder:text-gray-500 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(99,24,241,0.5)]'
                      placeholder='Message...'
                      rows={5}
                    />
                    {touched.message && errors.message && (
                      <p className='text-red-400 text-xs mt-1 pl-4'>{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-start mt-6">
                  <button
                    type='submit'
                    disabled={loading}
                    className={`px-8 py-2 rounded-full text-white font-medium flex items-center gap-2 transition-all duration-200 ${
                      isFormValid && !loading
                        ? 'bg-[#6318F1] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 cursor-pointer'
                        : 'bg-[#6318F1]/40 cursor-not-allowed opacity-60'
                    }`}
                  >
                    {loading && (
                      <svg className='animate-spin h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                      </svg>
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>

        <div className='lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>
          <div className='flex flex-1 flex-col items-center justify-around'>
            <div className='flex flex-col justify-center items-center py-4'>
              <FaPhoneAlt size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Phone</div>
              <div className='text-gray-400 text-lg'>0310 - 7756294</div>
            </div>
            <hr className='w-32 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB]' />
          </div>

          <div className='flex flex-1 flex-col items-center justify-around'>
            <div className='flex flex-col justify-center items-center py-4'>
              <MdMarkEmailUnread size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Email</div>
              <div className='text-gray-400 text-lg'>0310 - 7756294</div>
            </div>
            <hr className='w-32 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB]' />
          </div>

          <div className='flex flex-1 flex-col items-center justify-around'>
            <div className='flex flex-col justify-center items-center py-4'>
              <FaLocationDot size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Location</div>
              <div className='text-gray-400 text-lg'>0310 - 7756294</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
