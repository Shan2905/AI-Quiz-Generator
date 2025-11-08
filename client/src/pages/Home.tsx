import { useState } from "react";
import { Button } from "@/components/ui/button";
import GenerateQuizTab from "@/components/GenerateQuizTab";
import HistoryTab from "@/components/HistoryTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"generate" | "history">("generate");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8 gap-4">
          <Button
            variant={activeTab === "generate" ? "default" : "outline"}
            onClick={() => setActiveTab("generate")}
            data-testid="button-tab-generate"
          >
            Generate Quiz
          </Button>
          <Button
            variant={activeTab === "history" ? "default" : "outline"}
            onClick={() => setActiveTab("history")}
            data-testid="button-tab-history"
          >
            History
          </Button>
        </div>

        {activeTab === "generate" ? <GenerateQuizTab /> : <HistoryTab />}
      </div>
    </div>
  );
}
