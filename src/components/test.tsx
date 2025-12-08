import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      alert('Testimonial submitted successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to submit testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Testimonial</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow flex flex-col">
        <div className="relative z-0 mb-6 w-full group">
          <input type="text" {...register('name', { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.name?.type === 'required' && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <input type="email" {...register('email', { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.email?.type === 'required' && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <textarea {...register('message', { required: true })} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
        </div>
        <p className="text-red-500 text-xs italic">{errors.message?.type === 'required' && "This field is required"}</p>

        <button type="submit" disabled={loading} className={`mt-4 py-2 px-4 w-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-700'}`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      alert('Testimonial submitted successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to submit testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Testimonial</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow flex flex-col">
        <div className="relative z-0 mb-6 w-full group">
          <input type="text" {...register('name', { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.name?.type === 'required' && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <input type="email" {...register('email', { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.email?.type === 'required' && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <textarea {...register('message', { required: true })} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
        </div>
        <p className="text-red-500 text-xs italic">{errors.message?.type === 'required' && "This field is required"}</p>

        <button type="submit" disabled={loading} className={`mt-4 py-2 px-4 w-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-700'}`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;