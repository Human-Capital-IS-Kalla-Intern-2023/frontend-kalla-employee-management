const SalaryInfoEmployeeCard = ({ employeeDatas, profileImg }: any) => {
  return (
    <div className="">
      <div className="flex flex-wrap w-full px-2 py-2 pb-2 overflow-x-auto border-l-4 rounded-lg shadow-lg border-primary lg:w-full bg-slate-50">
        <div className="flex items-center px-4 pt-4 pb-2 lg:w-full sm:w-1/2">
          <div className="flex items-start">
            <img
              src={profileImg}
              alt={`Image Profile ${employeeDatas.fullname}`}
              className="mr-4 w-28 h-28 rounded-2xl"
            />
            <div>
              <p className="text-lg font-bold uppercase">
                {employeeDatas.fullname}
              </p>
              <div className="flex flex-wrap items-center mt-4">
                <div className="pr-5 mb-2 lg:pr-4">
                  <h3 className="text-[15px]">NIK</h3>
                  <p className="text-base font-semibold ">
                    {employeeDatas.nip}
                  </p>
                </div>
                <div className="px-5 mb-2 lg:px-4">
                  <h3 className=" text-[15px]">Job Grade</h3>
                  <p className="text-base font-semibold uppercase ">
                    {employeeDatas.grade_name}
                  </p>
                </div>
                <div className="px-4 mb-2">
                  <h3 className=" text-[15px]">Position</h3>
                  <p className="text-base font-semibold uppercase">
                    {employeeDatas.position_name}
                  </p>
                </div>
                <div className="px-4 mb-2">
                  <h3 className=" text-[15px]">Company Name</h3>
                  <p className="text-base font-semibold uppercase">
                    {employeeDatas.company_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfoEmployeeCard;
