import React, { useState, useEffect } from 'react';

import { ArrowButtonIcon} from '../../assets/icons/icon';

const DetailEmployee = ({ employeeData } : any) => {
  const [showPrimaryAssignment, setShowPrimaryAssignment] = useState(false);
  const [selectedSecondaryPosition, setSelectedSecondaryPosition] = useState<string>('');

  const togglePrimaryAssignment = () => {
    setShowPrimaryAssignment(!showPrimaryAssignment);
  };

  const handleSecondaryPositionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSecondaryPosition(event.target.value);
  };

  useEffect(() => {
    const initialOption = employeeData.secondaryPosition[0]?.position;
    if (initialOption) {
      setSelectedSecondaryPosition(initialOption);
    }
  }, [employeeData.secondaryPosition]);

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
                                <h2 className="text-base font-semibold">Company Name</h2>
                                <p className="text-base border-b pb-1">{employeeData.company}</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Directorate</h2>
                                <p className="text-base border-b pb-1">{employeeData.directorate}</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3 ">Division</h2>
                                <p className="text-base border-b pb-1">{employeeData.division}</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base font-semibold">Section</h2>
                                <p className="text-base border-b pb-1">{employeeData.section}</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Main Position</h2>
                                <p className="text-base border-b pb-1">{employeeData.mainPosition}</p>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/*Secondary Position*/}
                <div className="px-5">
              <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                <table className="table-auto p-5 w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left border-b-2 w-1/2">
                        <h2 className="text-base font-bold">Secondary Position</h2>
                      </th>
                      <th className="px-4 py-2 text-right border-b-2 w-1/2">
                          </th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        {/* Kolom 1 */}
                        <td className="px-4 py-2 text-left align-top">
                          <div>
                            <select
                              value={selectedSecondaryPosition}
                              onChange={handleSecondaryPositionChange}
                              className="border-2 border-black  rounded-lg p-1"
                            >
                              {employeeData.secondaryPosition.map((position: { position: string; }) => (
                                <option key={position.position} value={position.position}>
                                  {position.position}
                                </option>
                              ))}
                            </select>
                          </div>
                        </td>
                      </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>

            {selectedSecondaryPosition && (
              <div className="px-5">
                <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                  <table className="table-auto p-5 w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left border-b-2 w-1/2">
                          <h2 className="text-base font-bold">Secondary Position Details</h2>
                        </th>
                        <th className="px-4 py-2 text-right border-b-2 w-1/2">
                          </th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeData.secondaryPosition
                        .filter((position: { position: string; }) => position.position === selectedSecondaryPosition)
                        .map((selectedPosition: { position: React.Key | null | undefined; company: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; directorate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; division: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; section: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                          
                          <tr key={selectedPosition.position}>
                            {/* Kolom 1 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base font-semibold">Company Name</h2>
                                <p className="text-base border-b pb-1">{selectedPosition.company}</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Directorate</h2>
                                <p className="text-base border-b pb-1">{selectedPosition.directorate}</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Division</h2>
                                <p className="text-base border-b pb-1">{selectedPosition.division}</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base font-semibold">Section</h2>
                                <p className="text-base border-b pb-1">{selectedPosition.section}</p>
                              </div>
                              
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}


                <div className='px-5'>
                  <div className="bg-white rounded-lg pt-2 shadow-md my-4 cursor-pointer"
                onClick={togglePrimaryAssignment} >
                    <table className="table-auto p-5 w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left border-b-2 w-1/2">
                            <h2 className="text-base font-bold ">Allowance Information</h2>
                          </th>
                          <th className="px-4 py-2 text-right border-b-2 w-1/2">
                            <button onClick={togglePrimaryAssignment}>
                              {showPrimaryAssignment}
                              <ArrowButtonIcon className="h-6 w-6 ml-1" />
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
                                <h2 className="text-base font-semibold">Positional Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Communication Allowance</h2>
                                <p className="pl-7 text-sm">Entitled</p>
                                <p className="pl-7 text-sm border-b pb-1">Regulation</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3 ">Transportation Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                            </td>

                            {/* Kolom 2 */}
                            <td className="px-4 py-2 text-left align-top">
                              <div>
                                <h2 className="text-base font-semibold">Functional Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Meals Allowance</h2>
                                <p className="pl-7 text-sm border-b pb-6">Entitled</p>
                              </div>
                              <div>
                                <h2 className="text-base font-semibold pt-3">Parking Allowance</h2>
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
  