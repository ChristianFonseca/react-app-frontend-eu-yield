import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PredictionModalProps {
  isOpen: boolean
  onClose: () => void
  prediction: number | null
}

export function PredictionModal({ isOpen, onClose, prediction }: PredictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Prediction Result</DialogTitle>
          <DialogDescription>
            This is the predicted crop yield based on the provided data.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {prediction !== null ? (
            <p>The predicted crop yield is: {prediction}</p>
          ) : (
            <p>No prediction available. Please submit the form first.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

