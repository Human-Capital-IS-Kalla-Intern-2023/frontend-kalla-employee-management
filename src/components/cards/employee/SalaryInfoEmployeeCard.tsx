const SalaryInfoEmployeeCard = ({ employeeDatas, profileImg }: any) => {
  return (
    <div className="">
      <div className="flex flex-wrap w-full px-2 py-2 pb-2 overflow-x-auto border-l-4 rounded-lg shadow-lg border-primary lg:w-full bg-slate-50">
        <div className="flex items-center px-4 pt-4 pb-2 lg:w-full sm:w-1/2">
          <img
            src={profileImg}
            alt={`Image Profile ${employeeDatas.fullname}`}
            className="mr-4 w-28 h-28 rounded-2xl"
          />
          <div className="px-4 pl-0 mb-2">
            <p className="text-lg font-bold">{employeeDatas.fullname}</p>
            <h3 className="mt-4 font-semibold text-md">NIK</h3>
            <p className="text-[15px]">{employeeDatas.nip}</p>
          </div>
          <div className="flex flex-row items-start px-6 py-1 pt-12">
            <div className="px-5 mb-2 lg:px-4">
              <h3 className="font-semibold text-md">Job Grade</h3>
              <p className="text-[15px]">{employeeDatas.grade_name}</p>
            </div>
            <div className="px-4 mb-2">
              <h3 className="font-semibold text-md">Position</h3>
              <p className="text-[15px]">{employeeDatas.position_name}</p>
            </div>
            <div className="px-4 mb-2">
              <h3 className="font-semibold text-md">Company Name</h3>
              <p className="text-[15px]">{employeeDatas.company_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfoEmployeeCard;
