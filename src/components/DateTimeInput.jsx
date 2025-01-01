const DateTimeInput = ({ value, onChange, label }) => {
  return (
    <div className="relative">
      {" "}
      <legend className="absolute left-0 top-0 text-lg">{label}</legend>{" "}
      <div className="flex items-center mt-8 w-full">
        {" "}
        {/* Date Picker */}{" "}
        <input
          type="date"
          className="text-lg p-3 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-black w-1/2"
          value={value ? value.split("T")[0] : ""}
          onChange={(e) => onChange(e.target.value + "T" + value.split("T")[1])}
        />{" "}
        {/* Separator (Pipe) */}{" "}
        <span className="mx-2 text-xl text-gray-500">|</span>{" "}
        {/* Time Picker */}{" "}
        <input
          type="time"
          className="text-lg p-3 rounded-r border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-black w-1/2"
          value={value ? value.split("T")[1] : ""}
          onChange={(e) => onChange(value.split("T")[0] + "T" + e.target.value)}
        />{" "}
      </div>{" "}
    </div>
  );
};
export default DateTimeInput;
