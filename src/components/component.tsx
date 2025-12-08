import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <section
      id="business-specification"
      className={clsx('content-container', {
        'mobile-layout': isMobile,
      })}
    >
      <h1 aria-label="Business Specification Title">{businessSpec?.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: businessSpec?.description }} />
      {businessSpec?.contentTypes.map((contentType, index) => (
        <div key={index} className="content-type">
          <span role="listitem" aria-label={`Content Type ${index + 1}`}>
            {contentType}
          </span>
        </div>
      ))}
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <section
      id="business-specification"
      className={clsx('content-container', {
        'mobile-layout': isMobile,
      })}
    >
      <h1 aria-label="Business Specification Title">{businessSpec?.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: businessSpec?.description }} />
      {businessSpec?.contentTypes.map((contentType, index) => (
        <div key={index} className="content-type">
          <span role="listitem" aria-label={`Content Type ${index + 1}`}>
            {contentType}
          </span>
        </div>
      ))}
    </section>
  );
};

export default CreateBusinessSpecification;