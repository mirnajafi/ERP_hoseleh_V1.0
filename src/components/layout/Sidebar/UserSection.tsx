/* eslint-disable @next/next/no-img-element */

export default function UserSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden">
        <img
          src="/images/avatar.png"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 text-center">
        <h2 className=" font-bold text-lg">علی محمدی</h2>
        <div className="flex items-center gap-2 justify-center mt-1">
          <span className=" text-sm">09123494323</span>
        </div>
      </div>
    </div>
  );
}
