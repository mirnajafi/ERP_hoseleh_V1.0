interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/30" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] max-h-[90vh] overflow-auto">
        {children}
      </div>
    </div>
  );
} 