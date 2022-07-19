const Alert = ({ type = "info", msg = "" }) => {
  const renderAlertTypeClasses = () => {
    if (type === "info") {
      return "text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800";
    }
    if (type === "warning") {
      return "text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800";
    }
    if (type === "error") {
      return "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800";
    }
  };
  return (
    <div className={`p-4 mb-4 text-sm w-fit ${renderAlertTypeClasses()}`} role="alert">
      <span className="font-medium">Alert: </span>
      {msg}
    </div>
  );
};

export default Alert;
