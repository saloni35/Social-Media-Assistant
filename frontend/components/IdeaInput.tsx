import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from 'react';

interface IdeaInputProps {
  topic: string;
  setTopic: (topic: string) => void;
  loading: boolean;
  onGenerateIdeas: () => void;
}

export const IdeaInput: React.FC<IdeaInputProps> = ({ topic, setTopic, loading, onGenerateIdeas }) => {
  return (
    <Card className="card">
      <CardContent className="flex flex-col">
        <label htmlFor="topic" className="form-label">
        What is your post about?
        </label>
        <Textarea
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input"
            placeholder="e.g., benefits of morning walk"
            disabled={loading}
            rows={4}
        />
      </CardContent>
      <Button
        onClick={onGenerateIdeas}
        className="btn-primary"
        disabled={loading || !topic.trim()}
      >
        {loading ? 'Generating...' : 'Generate Ideas'}
      </Button>
    </Card>
  );
};
