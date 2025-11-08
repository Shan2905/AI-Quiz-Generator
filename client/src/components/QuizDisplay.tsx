import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

interface QuizData {
  title: string;
  summary: string;
  questions: Question[];
  key_entities: string[];
  related_topics: string[];
}

interface QuizDisplayProps {
  quiz: QuizData;
  dateGenerated?: string;
}

export default function QuizDisplay({ quiz, dateGenerated }: QuizDisplayProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex });
  };

  const toggleExplanation = (questionIndex: number) => {
    setShowExplanations({
      ...showExplanations,
      [questionIndex]: !showExplanations[questionIndex],
    });
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        correct++;
      }
    });
    return correct;
  };

  const allAnswered = Object.keys(selectedAnswers).length === quiz.questions.length;
  const score = allAnswered ? calculateScore() : null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{quiz.title}</CardTitle>
          {dateGenerated && (
            <p className="text-sm text-muted-foreground">Generated on {dateGenerated}</p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-base">{quiz.summary}</p>
        </CardContent>
      </Card>

      {score !== null && (
        <Card className="border-primary">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">
                {score}/{quiz.questions.length}
              </p>
              <p className="text-lg mt-2">
                {Math.round((score / quiz.questions.length) * 100)}% Correct
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Questions</h2>
        {quiz.questions.map((question, qIndex) => (
          <Card key={qIndex}>
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                {qIndex + 1}. {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={selectedAnswers[qIndex]?.toString()}
                onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}
                data-testid={`radio-group-question-${qIndex}`}
              >
                {question.options.map((option, oIndex) => {
                  const isSelected = selectedAnswers[qIndex] === oIndex;
                  const isCorrect = oIndex === question.correct_answer;
                  const showResult = allAnswered;

                  return (
                    <div
                      key={oIndex}
                      className={`flex items-center space-x-3 p-3 rounded-md border hover-elevate active-elevate-2 ${
                        showResult && isCorrect
                          ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                          : showResult && isSelected && !isCorrect
                          ? "border-destructive bg-destructive/10"
                          : "border-border"
                      }`}
                      data-testid={`option-${qIndex}-${oIndex}`}
                    >
                      <RadioGroupItem
                        value={oIndex.toString()}
                        id={`q${qIndex}-o${oIndex}`}
                        data-testid={`radio-q${qIndex}-o${oIndex}`}
                      />
                      <Label
                        htmlFor={`q${qIndex}-o${oIndex}`}
                        className="flex-1 cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>

              {selectedAnswers[qIndex] !== undefined && (
                <Button
                  variant="outline"
                  onClick={() => toggleExplanation(qIndex)}
                  className="w-full"
                  data-testid={`button-toggle-explanation-${qIndex}`}
                >
                  {showExplanations[qIndex] ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Hide Explanation
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show Explanation
                    </>
                  )}
                </Button>
              )}

              {showExplanations[qIndex] && (
                <Card className="bg-accent">
                  <CardContent className="pt-4">
                    <p className="text-sm">{question.explanation}</p>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Entities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {quiz.key_entities.map((entity, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-entity-${index}`}>
                  {entity}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {quiz.related_topics.map((topic, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-topic-${index}`}>
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
