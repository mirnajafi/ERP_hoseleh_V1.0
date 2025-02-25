/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/common/Modal";
import ModalHeader from "./ModalHeader";
import ProgressSteps from "./ProgressSteps";
import ModalContent from "./ModalContent";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="px-4 py-2">
        <ModalHeader onClose={onClose} />
        <ProgressSteps />
        <ModalContent />
      </div>
    </Modal>
  );
} 