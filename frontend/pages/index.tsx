import { useState } from 'react';
import axios from 'axios';
import { IdeaInput } from '../components/IdeaInput';
import { IdeaList } from '../components/IdeaList';
import { RefinedPost } from '../components/RefinedPost';

const API_BASE_URL = 'http://localhost:8000';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<string>('');
  const [refinedIdea, setRefinedIdea] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateIdeas = async () => {
    try {
      setLoading(true);
      resetStates();
      const response = await axios.post(`${API_BASE_URL}/generate`, { topic });
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error('Error generating ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefineIdea = async () => {
    if (!selectedIdea) return;
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/refine`, { idea: selectedIdea });
      setRefinedIdea(response.data.refined);
    } catch (error) {
      console.error('Error refining idea:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetStates = () => {
    setIdeas([]);
    setSelectedIdea('');
    setRefinedIdea('');
  };

  const renderContent = () => (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Social Post Assistant
      </h1>

      <IdeaInput
        topic={topic}
        setTopic={setTopic}
        loading={loading}
        onGenerateIdeas={handleGenerateIdeas}
      />

      <IdeaList
        ideas={ideas}
        selectedIdea={selectedIdea}
        setSelectedIdea={setSelectedIdea}
        onRefine={handleRefineIdea}
        loading={loading}
      />

      {refinedIdea && <RefinedPost content={refinedIdea} />}
    </div>
  );

  return <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">{renderContent()}</main>;
}
