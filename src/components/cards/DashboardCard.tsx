// import React from "react";

import employeeIcon from '../../assets/img/employee.png';
import companyIcon from '../../assets/img/companyIcon.png';
import divisionIcon from '../../assets/img/divisionIcon.png';
import sectionIcon from '../../assets/img/sectionIcon.png';
import directorateIcon from '../../assets/img/directorateIcon.png';


const Dashboard = () => {

  return (
    
    <section className="py-3 antialiased sm:py-2 overlay">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative min-h-[90vh] bg-red-50 shadow-profile sm:rounded-lg">
          <div className="overflow-x-auto">
            
            <div
              className='flex sm:flex-row p-6 sm:space-x-2 flex-row w-full min-h-full items-center justify-center'>

            <div
                className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-lg border-l-4 border-blue-400'>

                <div className="flex justify-center w-full">
                  <div>
                    <div className="p-2 flex justify-center items-center">
                      <img src={employeeIcon} className="w-14 h-14 " alt="Employee">
                          </img>
                    </div>
                    <div className="font-bold text-base pb-2">
                    Employee
                    </div>
                  </div>
                  
                </div>
                <div>
                  <div className="font-bold text-2xl flex justify-center items-center">
                    500
                  </div>
                  <div className="font-bold text-sm flex justify-center items-center">
                    Total
                  </div>
                </div>
              </div>


              <div
                className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 pt-4 bg-white rounded-md shadow-lg border-l-4 border-purple-400'>
                <div className="flex justify-center w-full">
                  <div>
                    <div className="p-2 flex justify-center items-center">
                      <img src={companyIcon} className="w-14 h-14 ">
                          </img>
                    </div>
                    <div className="font-bold text-base pb-2">
                    Business Unit
                    </div>
                  </div>
                  
                </div>
                <div >
                  <div className="font-bold text-2xl text-center">
                    4
                  </div>
                  <div className="font-bold text-sm flex justify-center items-center">
                    Total
                  </div>
                </div>
              </div>

              <div
                className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 pt-4 bg-white rounded-md shadow-lg border-l-4 border-red-500'>
                <div className="flex justify-center w-full">
                  <div>
                    <div className="p-2 flex justify-center items-center">
                      <img src={directorateIcon} className="w-14 h-14 ">
                          </img>
                    </div>
                    <div className="font-bold text-base pb-2">
                    Directorate
                    </div>
                  </div>
                  
                </div>
                <div >
                  <div className="font-bold text-2xl text-center">
                    7
                  </div>
                  <div className="font-bold text-sm flex justify-center items-center">
                    Total
                  </div>
                </div>
              </div>


              <div
                className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-lg border-l-4 border-purple-400'>
                <div className="flex justify-center w-full">
                  <div>
                    <div className="p-2 flex justify-center items-center">
                      <img src={divisionIcon} className="w-14 h-14 ">
                         </img>
                    </div>
                    <div className="font-bold text-base pb-2">
                    Division
                    </div>
                  </div>
                  
                </div>
                <div >
                  <div className="font-bold text-2xl text-center">
                    15
                  </div>
                  <div className="font-bold text-sm flex justify-center items-center">
                    Total
                  </div>
                </div>
              </div>

              
              <div
                className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-lg border-l-4 border-slate-500'>
                <div className="flex justify-center w-full">
                  <div>
                    <div className="p-2 flex justify-center items-center">
                      <img src={sectionIcon} className="w-14 h-14 ">
                         </img>
                    </div>
                    <div className="font-bold text-base pb-2">
                    Section
                    </div>
                  </div>
                  
                </div>
                <div >
                  <div className="font-bold text-2xl text-center">
                    30
                  </div>
                  <div className="font-bold text-sm flex justify-center items-center">
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
