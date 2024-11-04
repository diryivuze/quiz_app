import React from 'react';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <Card className="bg-white shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-medium text-gray-500">
            Question {question.number} of {question.total}
          </span>
          <span className="text-sm font-medium text-blue-600">
            Points: {question.points}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {question.text}
        </h3>

        {question.type === 'multiple-choice' ? (
          <RadioGroup className="space-y-4">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Checkbox id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
export default QuestionCard ;