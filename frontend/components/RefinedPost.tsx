import React from 'react';

interface RefinedPostProps {
  content: string;
}

export const RefinedPost: React.FC<RefinedPostProps> = ({ content }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Refined Post:</h2>
      <div className="bg-gray-50 border border-gray-300 rounded p-4 mt-2 whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
};
