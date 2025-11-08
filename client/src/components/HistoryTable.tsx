import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface QuizHistoryItem {
  id: number;
  title: string;
  url: string;
  date_generated: string;
}

interface HistoryTableProps {
  quizzes: QuizHistoryItem[];
  onViewDetails: (id: number) => void;
}

export default function HistoryTable({
  quizzes,
  onViewDetails,
}: HistoryTableProps) {
  if (quizzes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No quizzes generated yet. Start by generating your first quiz!
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">URL</TableHead>
            <TableHead>Date Generated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quizzes.map((quiz) => (
            <TableRow key={quiz.id} data-testid={`row-quiz-${quiz.id}`}>
              <TableCell className="font-mono text-sm">{quiz.id}</TableCell>
              <TableCell className="font-medium">{quiz.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                <a
                  href={quiz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono text-sm truncate block max-w-xs"
                  data-testid={`link-url-${quiz.id}`}
                >
                  {quiz.url}
                </a>
              </TableCell>
              <TableCell className="text-sm">{quiz.date_generated}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewDetails(quiz.id)}
                  data-testid={`button-view-details-${quiz.id}`}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
