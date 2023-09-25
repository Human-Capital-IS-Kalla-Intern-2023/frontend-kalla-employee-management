import { ArrowButtonIcon} from '../../assets/icons/icon';


  const DetailEmployee = ({ employeeData }: any) => {
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
  
              <div className="mt-6 grid grid-cols-1 px-5 pb-5 pt-4 md:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Company</h3>
                  <p>{employeeData.company}</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Directorate</h3>
                  <p>{employeeData.directorate}</p>
                </div>
  
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Division</h3>
                  <p>{employeeData.division}</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Section</h3>
                  <p>{employeeData.section}</p>
                </div>
  
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Main Position</h3>
                  <p>{employeeData.mainPosition}</p>
                </div>
  
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-md font-semibold mb-2">Secondary Position</h3>
                  <p>{employeeData.secondaryPosition}</p>
                </div>

              </div>

              <div className='px-5'>
                <div className="bg-white rounded-lg pt-2 shadow-md my-4">
                  <table className="table-auto p-5 w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left border-b-2 w-1/2">
                          <h2 className="text-ml font-bold ">Primary Assignment</h2>
                        </th>
                        <th className="px-4 py-2 text-left border-b-2 w-1/2">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                        
                        {/* Kolom 1 */}


                        {/* Kolom 2 */}
                        <td className="px-4 py-2 text-left align-top">
                          <div>
                            <h2 className="text-base">Functional Allowance</h2>
                            <p className="pl-7 text-sm border-b pb-1">Entitled</p>
                          </div>
                          <div>
                            <h2 className="text-base pt-3">Meals Allowance</h2>
                            <p className="pl-7 text-sm border-b pb-3">Entitled</p>
                          </div>
                        </td>


                        {/* Kolom 2 */}
                      </tr>
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
  