
import React from 'react';

const DepartmentsOption = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-deewan-dark mb-12">
          Departments We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Department cards would go here */}
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
            <p className="text-deewan-dark/70">
              Enhanced communication tools for your support teams
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-3">Marketing</h3>
            <p className="text-deewan-dark/70">
              Drive engagement with intelligent messaging campaigns
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-3">Sales</h3>
            <p className="text-deewan-dark/70">
              Connect with prospects through multiple channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsOption;
