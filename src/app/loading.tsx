export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-brand-dark text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-brand-red" />
        <p className="text-lg tracking-wide">Loading Portfolio...</p>
      </div>
    </div>
  );
}
