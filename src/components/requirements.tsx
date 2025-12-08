import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsFormData {
  businessName: string;
  contactEmail: string;
  targetAudience: string[];
  productCategories: string[];
  paymentMethods: string[];
  shippingOptions: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsFormData>();
  const router = useRouter();

  const onSubmit = (data: RequirementsFormData) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('Form submitted successfully!');
      router.push('/thank-you');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.businessName ? 'border-red-500' : ''}`}
        />
        <p className="text-red-500 text-xs italic">{errors.businessName?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">Contact Email</label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'This is required' })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
        <p className="text-red-500 text-xs italic">{errors.contactEmail?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-gray-700 font-bold mb-2">Target Audience</label>
        <select
          id="targetAudience"
          {...register('targetAudience')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.targetAudience?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="productCategories" className="block text-gray-700 font-bold mb-2">Product Categories</label>
        <select
          id="productCategories"
          {...register('productCategories')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.productCategories ? 'border-red-500' : ''}`}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Books">Books</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.productCategories?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="paymentMethods" className="block text-gray-700 font-bold mb-2">Payment Methods</label>
        <select
          id="paymentMethods"
          {...register('paymentMethods')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.paymentMethods ? 'border-red-500' : ''}`}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.paymentMethods?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="shippingOptions" className="block text-gray-700 font-bold mb-2">Shipping Options</label>
        <select
          id="shippingOptions"
          {...register('shippingOptions')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.shippingOptions ? 'border-red-500' : ''}`}
        >
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
          <option value="Pickup">Pickup</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.shippingOptions?.message}</p>
      </div>

      <button type="submit" disabled={loading} className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsFormData {
  businessName: string;
  contactEmail: string;
  targetAudience: string[];
  productCategories: string[];
  paymentMethods: string[];
  shippingOptions: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsFormData>();
  const router = useRouter();

  const onSubmit = (data: RequirementsFormData) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('Form submitted successfully!');
      router.push('/thank-you');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.businessName ? 'border-red-500' : ''}`}
        />
        <p className="text-red-500 text-xs italic">{errors.businessName?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">Contact Email</label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'This is required' })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
        <p className="text-red-500 text-xs italic">{errors.contactEmail?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-gray-700 font-bold mb-2">Target Audience</label>
        <select
          id="targetAudience"
          {...register('targetAudience')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.targetAudience?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="productCategories" className="block text-gray-700 font-bold mb-2">Product Categories</label>
        <select
          id="productCategories"
          {...register('productCategories')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.productCategories ? 'border-red-500' : ''}`}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Books">Books</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.productCategories?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="paymentMethods" className="block text-gray-700 font-bold mb-2">Payment Methods</label>
        <select
          id="paymentMethods"
          {...register('paymentMethods')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.paymentMethods ? 'border-red-500' : ''}`}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.paymentMethods?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="shippingOptions" className="block text-gray-700 font-bold mb-2">Shipping Options</label>
        <select
          id="shippingOptions"
          {...register('shippingOptions')}
          multiple={true}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.shippingOptions ? 'border-red-500' : ''}`}
        >
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
          <option value="Pickup">Pickup</option>
        </select>
        <p className="text-red-500 text-xs italic">{errors.shippingOptions?.message}</p>
      </div>

      <button type="submit" disabled={loading} className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;