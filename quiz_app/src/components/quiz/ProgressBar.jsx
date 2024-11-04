function ProgressBar({ current, total }) {
    const progress = (current / total) * 100;
    return (
      <div className="w-full bg-gray-300 h-2 rounded">
        <div style={{ width: `${progress}%` }} className="bg-blue-600 h-2 rounded"></div>
      </div>
    );
  }
  
  export default ProgressBar;
  