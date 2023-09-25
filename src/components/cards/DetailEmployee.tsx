import React, { useState } from 'react';

import { ArrowButtonIcon} from '../../assets/icons/icon';

const DetailEmployee = ({ employeeData } : any) => {
  const [showPrimaryAssignment, setShowPrimaryAssignment] = useState(true);

  const togglePrimaryAssignment = () => {
    setShowPrimaryAssignment(!showPrimaryAssignment);
  };
  const [showSecondaryAssignment, setShowSecondaryAssignment] = useState(true);

  const toggleSecondaryAssignment = () => {
    setShowSecondaryAssignment(!showSecondaryAssignment);
  };

    return (
      <section className="py-3 antialiased sm:py-2 overlay">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="relative overflow-hidden bg-green-500 shadow-profile sm:rounded-lg">
            <div className="overflow-x-auto pt-4">

            {/* Button Manage akan menggunakan Modal Edit yang sama dengan TabelBody */}
            <div className="flex justify-end pr-2">
              <button className="flex items-center justify-center px-3 py-2 mr-3 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow">Manage
              <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" /></button>
            </div>
            {/* Button Manage */}

              <img
                src={employeeData.profileImageUrl}
                alt={employeeData.name}
                className="w-40 h-40 mx-auto rounded-2xl"
              />
  
              <h2 className="text-2xl font-semibold mt-4 text-center">
                {employeeData.name}
              </h2>
              <p className="font-medium text-center">{employeeData.employeeId}</p>
  
              <div className='px-5'>
                  <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                    <table className="table-auto p-5 w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left border-b-2 w-1/2">
                            <h2 className="text-base font-bold ">Main Information</h2>
                          </th>
                          <th className="px-4 py-2 text-right border-b-2 w-1/2">
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            {/* Kolom 1 */}
                            <td className="px-4 py-2 text-left align-top ">
                              <div>
                                <h2 className="text-lg font-medium">Company Name</h2>
                                <p className="text-base border-b pb-1">{employeeData.company}</p>
                              </div>
                              <div>
                                <h2 className="text-lg font-medium pt-3">Directorate</h2>
                                <p className="text-base border-b pb-1">{employeeData.directorate}</p>
                              </div>
                              <div>
                                <h2 className="text-lg font-medium pt-3 ">Division</h2>
                                <p className="text-base border-b pb-1">{employeeData.division}</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-lg font-medium">Section</h2>
                                <p className="text-base border-b pb-1">{employeeData.section}</p>
                              </div>
                              <div>
                                <h2 className="text-lg font-medium pt-3">Main Position</h2>
                                <p className="text-base border-b pb-1">{employeeData.mainPosition}</p>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/*Secondary Position*/}
                <div className='px-5'>
                  <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                    <table className="table-auto p-5 w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left border-b-2 w-1/2">
                            <h2 className="text-base font-bold ">Secondary Position</h2>
                          </th>
                          <th className="px-4 py-2 text-right border-b-2 w-1/2">
                            <button onClick={toggleSecondaryAssignment}>
                              {showSecondaryAssignment ? 'Hide' : 'Show'}
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {showSecondaryAssignment && (
                          <tr>
                            {/* Kolom 1 */}
                            <td className="px-4 py-2 text-left align-top ">
                              <div>
                                <p className="text-base border-b pb-1">{employeeData.secondaryPosition}</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            {/* <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base">Functional Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3">Meals Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-6">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3">Parking Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                            </td> */}
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>


                <div className='px-5'>
                  <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                    <table className="table-auto p-5 w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left border-b-2 w-1/2">
                            <h2 className="text-ml font-bold ">Allowance Information</h2>
                          </th>
                          <th className="px-4 py-2 text-right border-b-2 w-1/2">
                            <button onClick={togglePrimaryAssignment}>
                              {showPrimaryAssignment ? 'Hide' : 'Show'}
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {showPrimaryAssignment && (
                          <tr>
                            {/* Kolom 1 */}
                            <td className="px-4 py-2 text-left align-top ">
                              <div>
                                <h2 className="text-base ">Positional Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3">Communication Allowance</h2>
                                <p className="pl-7 text-sm">Entitled</p>
                                <p className="pl-7 text-sm border-b pb-1">Regulation</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3 ">Transportation Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base">Functional Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3">Meals Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-6">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base pt-3">Parking Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DetailEmployee;
  