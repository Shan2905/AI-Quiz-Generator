import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import HistoryTable from "./HistoryTable";
import Modal from "./Modal";
import QuizDisplay from "./QuizDisplay";

interface QuizHistoryItem {
  id: number;
  title: string;
  url: string;
  date_generated: string;
}

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

export default function HistoryTab() {
  // todo: remove mock functionality - replace with actual API call
  const [quizzes] = useState<QuizHistoryItem[]>([
    {
      id: 1,
      title: "Python (programming language)",
      url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
      date_generated: "January 8, 2025",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
      date_generated: "January 8, 2025",
    },
    {
      id: 3,
      title: "Machine Learning",
      url: "https://en.wikipedia.org/wiki/Machine_learning",
      date_generated: "January 7, 2025",
    },
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (id: number) => {
    console.log("Fetching quiz details for ID:", id);

    // todo: remove mock functionality - replace with actual API call
    const mockQuiz: QuizData = {
      title: quizzes.find((q) => q.id === id)?.title || "Quiz",
      summary:
        "This is a detailed summary of the Wikipedia article that was used to generate this quiz. It provides key insights and context.",
      questions: [
        {
          question: "What is the main concept discussed in this article?",
          options: [
            "Correct Answer",
            "Incorrect Option 1",
            "Incorrect Option 2",
            "Incorrect Option 3",
          ],
          correct_answer: 0,
          explanation:
            "This is the explanation for why this answer is correct, providing additional context and learning.",
        },
        {
          question: "Which year was this technology first introduced?",
          options: ["1980", "1991", "2000", "2010"],
          correct_answer: 1,
          explanation:
            "The technology was first introduced in 1991, marking a significant milestone in the field.",
        },
      ],
      key_entities: ["Entity A", "Entity B", "Entity C", "Entity D"],
      related_topics: ["Related Topic 1", "Related Topic 2", "Related Topic 3"],
    };

    setSelectedQuiz(mockQuiz);
    setModalOpen(true);
  };

  const handleRefresh = () => {
    console.log("Refreshing quiz history...");
    // todo: remove mock functionality - replace with actual API call to fetch updated history
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Quiz History</h1>
        <Button
          variant="outline"
          onClick={handleRefresh}
          data-testid="button-refresh-history"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <HistoryTable quizzes={quizzes} onViewDetails={handleViewDetails} />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedQuiz && <QuizDisplay quiz={selectedQuiz} />}
      </Modal>
    </div>
  );
}
