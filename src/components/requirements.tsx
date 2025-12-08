import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    details: string;
  }>;
}

interface IGatherRequirementsForm {
  contentBusinessName: string;
  targetAudience: string;
  contentTypes: string[];
  technologyStack: string[];
  additionalFeatures: string;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<IRequirement[]>([]);

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newRequirements: IRequirement = {
        title: data.contentBusinessName,
        description: `Gathering requirements for ${data.targetAudience} audience.`,
        requirements: [
          { name: 'Content Business Name', details: data.contentBusinessName },
          { name: 'Target Audience', details: data.targetAudience },
          { name: 'Content Types', details: data.contentTypes.join(', ') },
          { name: 'Technology Stack', details: data.technologyStack.join(', ') },
          { name: 'Additional Features', details: data.additionalFeatures }
        ]
      };
      
      setRequirements([...requirements, newRequirements]);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather requirements form" role="form">
        <div className="mb-4">
          <label htmlFor="contentBusinessName" className="block text-sm font-medium text-gray-700">Content Business Name:</label>
          <input type="text" id="contentBusinessName" {...register("contentBusinessName", { required: true })} aria-required="true" className="mt-1 p-2 w-full border rounded-md focus:border-blue-500" />
          {errors.contentBusinessName && <p className="text-red-600 text-sm mt-1">This field is required</p>}
        </div>
        
        {/* Similar input fields for targetAudience, contentTypes, technologyStack, additionalFeatures */}
        
        <button type="submit" disabled={loading} aria-label="Submit requirements form" className={`mt-4 p-2 w-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded-md`}>
          {loading ? "Loading..." : "Gather Requirements"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Requirements</h2>
        {requirements.map((requirement, index) => (
          <div key={index} className="mb-6 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">{requirement.title}</h3>
            <p>{requirement.description}</p>
            <ul role="list" className="mt-2 list-disc pl-5">
              {requirement.requirements.map((req, idx) => (
                <li key={idx} aria-label={`Requirement ${idx + 1}`}>
                  <strong>{req.name}: </strong> {req.details}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    details: string;
  }>;
}

interface IGatherRequirementsForm {
  contentBusinessName: string;
  targetAudience: string;
  contentTypes: string[];
  technologyStack: string[];
  additionalFeatures: string;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<IRequirement[]>([]);

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newRequirements: IRequirement = {
        title: data.contentBusinessName,
        description: `Gathering requirements for ${data.targetAudience} audience.`,
        requirements: [
          { name: 'Content Business Name', details: data.contentBusinessName },
          { name: 'Target Audience', details: data.targetAudience },
          { name: 'Content Types', details: data.contentTypes.join(', ') },
          { name: 'Technology Stack', details: data.technologyStack.join(', ') },
          { name: 'Additional Features', details: data.additionalFeatures }
        ]
      };
      
      setRequirements([...requirements, newRequirements]);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather requirements form" role="form">
        <div className="mb-4">
          <label htmlFor="contentBusinessName" className="block text-sm font-medium text-gray-700">Content Business Name:</label>
          <input type="text" id="contentBusinessName" {...register("contentBusinessName", { required: true })} aria-required="true" className="mt-1 p-2 w-full border rounded-md focus:border-blue-500" />
          {errors.contentBusinessName && <p className="text-red-600 text-sm mt-1">This field is required</p>}
        </div>
        
        {/* Similar input fields for targetAudience, contentTypes, technologyStack, additionalFeatures */}
        
        <button type="submit" disabled={loading} aria-label="Submit requirements form" className={`mt-4 p-2 w-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded-md`}>
          {loading ? "Loading..." : "Gather Requirements"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Requirements</h2>
        {requirements.map((requirement, index) => (
          <div key={index} className="mb-6 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">{requirement.title}</h3>
            <p>{requirement.description}</p>
            <ul role="list" className="mt-2 list-disc pl-5">
              {requirement.requirements.map((req, idx) => (
                <li key={idx} aria-label={`Requirement ${idx + 1}`}>
                  <strong>{req.name}: </strong> {req.details}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;