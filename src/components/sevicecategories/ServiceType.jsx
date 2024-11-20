import React from 'react';
import DailyWorkForm from './DailyWorkForm';
import Type from './Type';
import ServiceHeader from './ServiceHeader';

const ServiceType = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <ServiceHeader />
      </div>
      <div className="flex space-x-6">
        <div className="flex-1">
          <Type />
        </div>
        <div className="flex-1">
          <DailyWorkForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
