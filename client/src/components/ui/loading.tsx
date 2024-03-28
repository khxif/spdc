import PulseLoader from "react-spinners/PulseLoader";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <PulseLoader color="#fff" />
    </div>
  );
}
