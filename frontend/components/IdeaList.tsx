import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 space-y-4">
            <h2 className="section-title">Pick an idea:</h2>

            <div className="flex flex-col gap-3">
            {ideas.map((idea, index) => (
                <Button
                key={index}
                  onClick={() => setSelectedIdea(idea)}
                  className={`idea-button ${
                      selectedIdea === idea
                        ? "idea-button-selected"
                        : "idea-button-default"
                    }`}
                >
                  {idea}
                </Button>
            ))}
            </div>

          <Button
            onClick={onRefine}
            className="btn-secondary"
            disabled={!selectedIdea || loading}
          >
            {loading ? 'Refining...' : 'Refine Selected Idea'}
          </Button>
      </CardContent>
    </Card>
  );
};
