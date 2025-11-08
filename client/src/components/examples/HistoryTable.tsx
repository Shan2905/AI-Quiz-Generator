import HistoryTable from "../HistoryTable";

const mockQuizzes = [
  {
    id: 1,
    title: "Python (programming language)",
    url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    date_generated: "2025-01-08 10:30 AM",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    date_generated: "2025-01-08 11:45 AM",
  },
  {
    id: 3,
    title: "Machine Learning",
    url: "https://en.wikipedia.org/wiki/Machine_learning",
    date_generated: "2025-01-08 2:15 PM",
  },
];

export default function HistoryTableExample() {
  const handleViewDetails = (id: number) => {
    console.log("View details for quiz:", id);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <HistoryTable quizzes={mockQuizzes} onViewDetails={handleViewDetails} />
    </div>
  );
}
