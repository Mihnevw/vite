import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Field, Label, Switch } from '@headlessui/react';

import Navigation from './Nav.jsx';
import Footer from './Footer.jsx';

export default function ContactHeader() {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    country: 'EU',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 60000);

    return () => clearTimeout(timer); // Изчистване на таймера при unmount
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required!";
    if (!formData.lastName) newErrors.lastName = "Last name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.phone) newErrors.phone = "Phone number is required!";
    if (!formData.message) newErrors.message = "Message is required!";
    if (!formData.company) newErrors.company = "Company is required!";
    if (!agreed) newErrors.agreed = "You must agree to the policies!";

    if (Object.keys(newErrors).length > 0) {
      setInputError(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      const responseData = JSON.parse(responseText);

      if (!response.ok) {
        console.error('Server Error:', responseData);
        alert(`Грешка: ${responseData.error || response.statusText}`);
        return;
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        country: 'US',
      });
      setError("");
    } catch (networkError) {
      console.error('Network Error:', networkError);
      alert('Problem with the connection to the server');
    }
  };

  return (
    <>
      <div className="bg-gray-800 p-6 pointer-events: auto">
        <Navigation />
      </div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
        </div>
        {submitted ? (
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <p className="font-semibold text-2xl">Thank you! Your message has been sent.</p>
            </div>
            <div className="text-lg text-gray-700 font-medium">
              You will be redirected to the home page shortly...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {inputError.firstName && <p className="text-red-500 text-sm mt-1">{inputError.firstName}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {inputError.lastName && <p className="text-red-500 text-sm mt-1">{inputError.lastName}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder='Company'
                    onChange={handleChange}
                    value={formData.company}
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {inputError.company && <p className="text-red-500 text-sm mt-1">{inputError.company}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    onChange={handleChange}
                    value={formData.email}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {inputError.email && <p className="text-red-500 text-sm mt-1">{inputError.email}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select
                        id="country"
                        name="country"
                        placeholder='Phone'
                        onChange={handleChange}
                        value={formData.country}
                        autoComplete="country"
                        aria-label="Country"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone number"
                      onChange={handleChange}
                      value={formData.phone}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {inputError.phone && <p className="text-red-500 text-sm mt-1">{inputError.phone}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder='Message'
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {inputError.message && <p className="text-red-500 text-sm mt-1">{inputError.message}</p>}
                </div>
              </div>
              <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                    />
                  </Switch>
                </div>


                <Label className="text-sm/6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </Label>
              </Field>

              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            </div>

            {inputError.agreed && <p className="text-red-500 text-sm mt-1">{inputError.agreed}</p>}

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s Talk
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  )
}
