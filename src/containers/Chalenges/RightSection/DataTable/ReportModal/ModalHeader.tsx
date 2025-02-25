/* eslint-disable @next/next/no-img-element */

interface ModalHeaderProps {
  onClose: () => void;
}

export default function ModalHeader({ onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <img
          src="/icons/Property 1=Default.svg"
          alt="close"
          className="w-7 h-7"
        />
        <h2 className="text-gray-800 font-medium">روزهای انجام شده</h2>
      </div>
      <button onClick={onClose}>
        <img src="/icons/exit.svg" alt="close" className="w-7 h-7" />
      </button>
    </div>
  );
} 