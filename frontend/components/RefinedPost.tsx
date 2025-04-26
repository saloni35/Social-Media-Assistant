import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from 'react';

interface RefinedPostProps {
  content: string;
}

export const RefinedPost: React.FC<RefinedPostProps> = ({ content }) => {
  return (
    <Card className="mt-6">
        <CardContent className="p-6 space-y-4">
        <h2 className="section-subtitle">Refined Post:</h2>
        <div className="refined-box">
        {content}
        </div>
        </CardContent>
    </Card>
  );
};
