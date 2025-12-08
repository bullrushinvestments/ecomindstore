import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('/api/business-spec');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load business specification:', err);
        setError('An error occurred while loading the business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.post('/api/business-spec', businessSpec);
      router.push('/');
    } catch (err) {
      console.error('Failed to save business specification:', err);
      setError('An error occurred while saving the business specification.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={businessSpec.name}
            onChange={(e) => setBusinessSpec({ ...businessSpec, name: e.target.value })}
            required
            className="mt-1 p-2 w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={businessSpec.description}
            onChange={(e) => setBusinessSpec({ ...businessSpec, description: e.target.value })}
            rows={4}
            required
            className="mt-1 p-2 w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Requirements
          </label>
          {businessSpec.requirements.map((req, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={req.title}
                onChange={(e) =>
                  setBusinessSpec({
                    ...businessSpec,
                    requirements: businessSpec.requirements.map((r, i) => (i === index ? { ...r, title: e.target.value } : r))
                  })
                }
                className="mr-2 p-1 border rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                value={req.details}
                onChange={(e) =>
                  setBusinessSpec({
                    ...businessSpec,
                    requirements: businessSpec.requirements.map((r, i) => (i === index ? { ...r, details: e.target.value } : r))
                  })
                }
                className="p-1 border rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSave}
          className={clsx(
            'w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            { 'cursor-not-allowed opacity-50': loading }
          )}
          disabled={loading}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('/api/business-spec');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load business specification:', err);
        setError('An error occurred while loading the business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.post('/api/business-spec', businessSpec);
      router.push('/');
    } catch (err) {
      console.error('Failed to save business specification:', err);
      setError('An error occurred while saving the business specification.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={businessSpec.name}
            onChange={(e) => setBusinessSpec({ ...businessSpec, name: e.target.value })}
            required
            className="mt-1 p-2 w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={businessSpec.description}
            onChange={(e) => setBusinessSpec({ ...businessSpec, description: e.target.value })}
            rows={4}
            required
            className="mt-1 p-2 w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Requirements
          </label>
          {businessSpec.requirements.map((req, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={req.title}
                onChange={(e) =>
                  setBusinessSpec({
                    ...businessSpec,
                    requirements: businessSpec.requirements.map((r, i) => (i === index ? { ...r, title: e.target.value } : r))
                  })
                }
                className="mr-2 p-1 border rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                value={req.details}
                onChange={(e) =>
                  setBusinessSpec({
                    ...businessSpec,
                    requirements: businessSpec.requirements.map((r, i) => (i === index ? { ...r, details: e.target.value } : r))
                  })
                }
                className="p-1 border rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSave}
          className={clsx(
            'w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            { 'cursor-not-allowed opacity-50': loading }
          )}
          disabled={loading}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;