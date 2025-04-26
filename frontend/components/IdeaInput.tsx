import React from 'react';

interface IdeaInputProps {
  topic: string;
  setTopic: (topic: string) => void;
  loading: boolean;
  onGenerateIdeas: () => void;
}

export const IdeaInput: React.FC<IdeaInputProps> = ({ topic, setTopic, loading, onGenerateIdeas }) => {
  return (
    <div>
      <label htmlFor="topic" className="block mb-1 font-medium text-gray-700">
        What is your post about?
      </label>
      <input
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="e.g., benefits of morning walk"
      />
      <button
        onClick={onGenerateIdeas}
        className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading || !topic.trim()}
      >
        {loading ? 'Generating...' : 'Generate Ideas'}
      </button>
    </div>
  );
};
