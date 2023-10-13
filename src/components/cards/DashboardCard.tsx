// import React from "react";

import {
  CompanyIcon2,
  DivisionIcon,
  EmployeeIcon,
  SectionIcon,
  DirectorateIcon,
} from '../../assets/icons/icon';

const Dashboard = () => {
  return (
    <section className="py-3 antialiased sm:py-2 overlay">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative min-h-[90vh] px-10 lg:px-0 bg-slate-100 shadow-profile sm:rounded-lg">
          <div className="overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0 justify-center w-full min-h-full p-6 sm:flex-row sm:space-x-2">
              <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full px-9 py-3 lg:px-0 lg:py-0 lg:p-2 bg-white border-l-4 rounded-md shadow-lg border-primary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-3">
                      <EmployeeIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                    </div>
                    <div className="pb-2 text-sm lg:text-base font-bold">
                      Employee
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center text-md lg:text-lg font-bold">
                    500
                  </div>
                  <div className="flex items-center justify-center pb-2 text-xs lg:text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full pt-4 bg-white border-l-4 rounded-md shadow-lg border-secondary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-1">
                      <CompanyIcon2 className="lg:w-10 lg:h-10 w-8 h-8" />
                    </div>
                    <div className="pb-2 text-sm lg:text-base font-bold">
                      Business Unit
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-md lg:text-lg font-bold text-center">
                    4
                  </div>
                  <div className="flex items-center justify-center pb-2 text-xs lg:text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 pt-4 bg-white border-l-4 rounded-md shadow-lg border-primary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-1">
                      <DirectorateIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                    </div>
                    <div className="pb-2 text-sm lg:text-base font-bold">
                      Directorate
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-md lg:text-lg font-bold text-center">
                    7
                  </div>
                  <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white border-l-4 rounded-md shadow-lg border-secondary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-1">
                      <DivisionIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                    </div>
                    <div className="p-2 text-xs lg:text-base font-bold">
                      Division
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-md lg:text-lg font-bold text-center">
                    15
                  </div>
                  <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white border-l-4 rounded-md shadow-lg sm:flex-col sm:w-1/4 border-primary">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <SectionIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                    </div>
                    <div className="pb-2 text-sm lg:text-base font-bold">
                      Section
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-md lg:text-lg font-bold text-center">
                    30
                  </div>
                  <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
