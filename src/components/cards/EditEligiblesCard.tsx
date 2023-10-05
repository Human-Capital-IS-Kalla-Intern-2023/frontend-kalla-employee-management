import { useState } from 'react';
import { ArrowButtonIcon } from '../../assets/icons/icon';
import profileImg from '../../assets/img/ProfilePicture.jpg';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';


type EligiblesProps = {
  employeeData: any;
};

const EditEligiblesCard = ({
  employeeData,
}: EligiblesProps) => {
  
  
    if (!employeeData) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      );
    }

  
  const [checked, setChecked] = useState(true);

  const handleChange = (val : any)   => {
    setChecked(val)
  }

  return (
    <section className="py-3 antialiased sm:py-2 overlay">
      <div className="max-w-screen-xl px-4 mx-auto">
      <div className="relative overflow-hidden bg-green-500 shadow-profile sm:rounded-lg">
        <div className="overflow-x-auto pb-4 pt-4 px-5">   
        <div className="flex justify-end  pb-5">
            <div className="flex gap-2 flex-row">
            {/* Button Manage untuk edit Eligible */}
              <button className="flex items-center justify-center px-3 py-2 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-red focus:ring-4 bg-red-600 hover:bg-red-500">Back
              </button>
              <button className="flex items-center justify-center px-3 py-2 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow">Save
                <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
              </button>
            </div>
            </div>
          {/* Button Manage */}
          
            {/* card 1 */}
            <div className="flex w-full rounded-lg overflow-hidden bg-red-100 shadow-lg px-2 py-2 pb-2">
            <div className="flex items-center px-4 pb-2 pt-4">
            <img
              src={profileImg}
              className="w-28 h-28 rounded-2xl mr-4"
            />
            <div className="mb-2 px-4 pl-0">
                
                <p className="text-lg font-bold">{employeeData.fullname}</p>
                
                <h3 className="text-md  mt-4">NIK</h3>
                <p className="text-md font-semibold">{employeeData.nip}</p>
            </div>
            <div className="flex flex-row items-start px-6 py-1 pt-12">
                <div className="mb-2 px-4">
                    <h3 className="text-md ">Job Grade</h3>
                    <p className="text-md font-semibold">{employeeData.grade_name}</p>
                </div>
                <div className="mb-2 px-4">
                    <h3 className="text-md ">Main Position</h3>
                    <p className="text-md font-semibold">{employeeData.main_position}</p>
                </div>
                <div className="mb-2 px-4">
                    <h3 className="text-md ">Company Name</h3>
                    <p className="text-md font-semibold">{employeeData.company_main}</p>
                </div>
            </div>
        </div>
        </div>
        {/* card 1 */}

        {/* card 2 */}

        {/* card 2 */}



        {/* card 3 */}
        <div className="">
              <div className="my-4 bg-white rounded-lg shadow-xl ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left rounded-tl-lg border-b-2">
                        <h2 className="text-lg font-medium text-white">
                          Allowance Information
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right rounded-tr-lg border-b-2">
                      </th>
                    </tr> 
                  </thead>
                  <tbody>
                      <tr className="flex flex-row">
                        {/* Kolom 1 */}
                        <td className="px-4 py-2 text-left align-top flex items-center">
                        <h2 className="text-base mr-2 mt-2">Positional Allowance</h2>
                        <label className="relative inline-flex items-center mt-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                defaultChecked
                                onChange={() => {
                                }}
                            />

                            <div
                                className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                            ></div>
                        </label>
                        </td>
                        {/* Kolom 2 */}
                        <td className="flex px-4 py-2 text-left align-top flex-row">
                        <h2 className="text-base mr-2 mt-2">Functional Allowance</h2>
                        <label className="relative inline-flex items-center mt-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                defaultChecked
                                onChange={() => {
                                }}
                            />

                            <div
                                className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                            ></div>
                        </label>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>        
              {/* card 3 */}
            </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default EditEligiblesCard;
