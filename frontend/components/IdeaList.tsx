import React from 'react';

interface IdeaListProps {
  ideas: string[];
  selectedIdea: string;
  setSelectedIdea: (idea: string) => void;
  onRefine: () => void;
  loading: boolean;
}

export const IdeaList: React.FC<IdeaListProps> = ({ ideas, selectedIdea, setSelectedIdea, onRefine, loading }) => {
  if (!ideas.length) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Pick an idea:</h2>
      {ideas.map((idea, index) => (
        <button
          key={index}
          onClick={() => setSelectedIdea(idea)}
          className={`block text-left w-full border rounded px-3 py-2 hover:bg-gray-100 ${
            selectedIdea === idea ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          {idea}
        </button>
      ))}
      <button
        onClick={onRefine}
        className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        disabled={!selectedIdea || loading}
      >
        {loading ? 'Refining...' : 'Refine Selected Idea'}
      </button>
    </div>
  );
};
