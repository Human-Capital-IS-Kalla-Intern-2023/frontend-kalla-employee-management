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
        <div className="relative min-h-[90vh]  shadow-profile sm:rounded-lg">
          <div className="overflow-x-auto">
            <div className="flex flex-row items-center justify-center w-full min-h-full p-6 sm:flex-row sm:space-x-2">
              <div className="flex flex-row flex-wrap items-center justify-center w-full p-5 bg-white border-l-4 rounded-md shadow-lg border-primary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <EmployeeIcon className="w-14 h-14" />
                    </div>
                    <div className="pb-2 text-base font-bold">Employee</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center text-2xl font-bold">
                    500
                  </div>
                  <div className="flex items-center justify-center text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-5 pt-4 bg-white border-l-4 rounded-md shadow-lg border-secondary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <CompanyIcon2 className="w-14 h-14" />
                    </div>
                    <div className="pb-2 text-base font-bold">
                      Business Unit
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-center">4</div>
                  <div className="flex items-center justify-center text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-5 pt-4 bg-white border-l-4 rounded-md shadow-lg border-primary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <DirectorateIcon className="w-14 h-14" />
                    </div>
                    <div className="pb-2 text-base font-bold">Directorate</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-center">7</div>
                  <div className="flex items-center justify-center text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-5 bg-white border-l-4 rounded-md shadow-lg border-secondary sm:flex-col sm:w-1/4">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <DivisionIcon className="w-14 h-14" />
                    </div>
                    <div className="pb-2 text-base font-bold">Division</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-center">15</div>
                  <div className="flex items-center justify-center text-sm font-bold">
                    Total
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full p-5 bg-white border-l-4 rounded-md shadow-lg sm:flex-col sm:w-1/4 border-primary">
                <div className="flex justify-center w-full">
                  <div>
                    <div className="flex items-center justify-center p-2">
                      <SectionIcon className="w-14 h-14" />
                    </div>
                    <div className="pb-2 text-base font-bold">Section</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-center">30</div>
                  <div className="flex items-center justify-center text-sm font-bold">
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
