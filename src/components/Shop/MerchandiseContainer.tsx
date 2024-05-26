import React, { ReactNode } from 'react';

interface MerchandiseContainerProps {
  children: ReactNode;
}

const MerchandiseContainer: React.FC<MerchandiseContainerProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 mt-6">
      {children}
    </div>
  );
};

export default MerchandiseContainer;
