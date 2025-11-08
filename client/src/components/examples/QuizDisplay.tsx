import QuizDisplay from "../QuizDisplay";

const mockQuiz = {
  title: "Python (programming language)",
  summary:
    "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code.",
  questions: [
    {
      question: "Who created the Python programming language?",
      options: [
        "Guido van Rossum",
        "James Gosling",
        "Bjarne Stroustrup",
        "Dennis Ritchie",
      ],
      correct_answer: 0,
      explanation:
        "Python was created by Guido van Rossum and was first released in 1991. He served as Python's lead developer until 2018.",
    },
    {
      question: "What is Python's design philosophy primarily focused on?",
      options: [
        "Maximum performance",
        "Code readability and simplicity",
        "Low-level memory management",
        "Strict type checking",
      ],
      correct_answer: 1,
      explanation:
        "Python's design philosophy emphasizes code readability with the use of significant indentation and aims to help programmers write clear, logical code.",
    },
    {
      question: "When was Python first released?",
      options: ["1985", "1991", "1995", "2000"],
      correct_answer: 1,
      explanation:
        "Python was first released in 1991 by Guido van Rossum as a successor to the ABC programming language.",
    },
  ],
  key_entities: [
    "Guido van Rossum",
    "Python Software Foundation",
    "CPython",
    "PyPI",
    "PEP 8",
  ],
  related_topics: [
    "Java",
    "JavaScript",
    "Ruby",
    "Programming paradigms",
    "Software development",
  ],
};

export default function QuizDisplayExample() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <QuizDisplay quiz={mockQuiz} dateGenerated="January 8, 2025" />
    </div>
  );
}
