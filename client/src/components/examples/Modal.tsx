import { useState } from "react";
import Modal from "../Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-modal">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Card>
          <CardHeader>
            <CardTitle>Modal Content Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              This is an example of content inside the modal. Click the X button
              or click outside to close.
            </p>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
