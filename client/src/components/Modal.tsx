import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-lg m-4"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-content"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
          data-testid="button-close-modal"
        >
          <X className="w-5 h-5" />
        </Button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
