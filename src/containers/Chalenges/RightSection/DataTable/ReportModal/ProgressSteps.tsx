/* eslint-disable @next/next/no-img-element */
interface StepProps {
  number: number;
  isCompleted?: boolean;
  isCurrent?: boolean;
  isLast?: boolean;
}

function Step({ number, isCompleted, isCurrent, isLast }: StepProps) {
  return (
    <div className="flex items-center relative">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
          ${isCompleted ? "text-white" : "bg-gray-200 text-gray-600"}
          ${
            isCompleted ? "bg-gradient-to-b from-[#FF8029] to-[#FFBB8C]" : ""
          } ${isCurrent ? "border border-emerald-500" : ""}
        `}
      >
        {isCompleted ? (
          <img
            src="/icons/Vector.svg"
            className="w-4 h-4 brightness-0 invert"
            alt=""
          />
        ) : (
          number
        )}
      </div>
      {isCurrent && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#10B981"
          className="absolute top-full left-[10px]"
        >
          <path d="M9.81285 5.53842L9.81142 5.5408L2.79315 17.2573L2.79309 17.2572L2.78909 17.2642C2.60073 17.5904 2.50106 17.9602 2.50001 18.3369C2.49895 18.7135 2.59655 19.0839 2.78307 19.4111C2.9696 19.7384 3.23857 20.0111 3.56321 20.2021C3.88785 20.3931 4.25685 20.4958 4.6335 20.5L4.6335 20.5H4.63899H18.6755V20.5L18.681 20.5C19.0577 20.4958 19.4267 20.3931 19.7513 20.2021C20.076 20.0111 20.3449 19.7384 20.5315 19.4111C20.718 19.0839 20.8156 18.7135 20.8145 18.3369C20.8135 17.9602 20.7138 17.5904 20.5254 17.2642L20.5255 17.2641L20.5214 17.2573L13.5031 5.5408L13.5031 5.54079L13.5017 5.53842C13.3094 5.22142 13.0387 4.95934 12.7156 4.77745C12.3925 4.59556 12.028 4.5 11.6573 4.5C11.2865 4.5 10.922 4.59556 10.5989 4.77745C10.2759 4.95934 10.0051 5.22142 9.81285 5.53842Z" />
        </svg>
      )}
      {!isLast && (
        <div
          className={`h-[4px] w-2 ${
            isCompleted ? "bg-primery-600" : "bg-gray-200"
          }`}
        />
      )}
    </div>
  );
}

export default function ProgressSteps() {
  return (
    <div className="flex items-center mb-8 pl-4" dir="ltr">
      <Step number={1} isCompleted />
      <Step number={2} isCurrent />
      {[3, 4, 5, 6, 7].map((number) => (
        <Step key={number} number={number} isLast={number === 7} />
      ))}
    </div>
  );
}
