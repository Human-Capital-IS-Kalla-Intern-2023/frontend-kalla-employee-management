const InputSalaryCard = ({
  componentName,
  value,
}: {
  componentName: string;
  value?: number;
}) => {
  return (
    <div className="relative w-1/3">
      <p className="mb-2 text-base font-medium text-grayBlack">
        {componentName}
      </p>
      <div className="relative">
        <input
          type="number"
          className="w-full p-2 pl-10 pr-3 text-right border border-gray-300 rounded-md"
          placeholder="0"
          value={value}
        />
        <span className="absolute inset-y-0 z-10 text-gray-500 transform -translate-y-1/2 left-2 top-1/2">
          Rp.
        </span>
      </div>
    </div>
  );
};

export default InputSalaryCard;
