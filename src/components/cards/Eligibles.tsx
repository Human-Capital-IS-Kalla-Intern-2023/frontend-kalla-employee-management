
import { useState } from "react";
import { ArrowButtonIcon } from "../../assets/icons/icon";
import profileImg from "../../assets/img/profileImg.webp";
import ReactLoading from "react-loading";


type EligiblesProps = {
  employeeData: any;
};

const Eligibles = ({ employeeData }: EligiblesProps) => {
  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }


  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleManageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <section className="antialiased overlay bg-slate-100">
      <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
        <h1 className="p-2 ml-2.5 text-lg font-medium border-b-2 border-primary ">
          Eligibles Employee Page
        </h1>
        <div className="text-sm font-medium ">
          {/* <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={handleBack}
          >
            BACK
          </button> */}
          <div className="">
            <div className="">
              {/* Button Manage untuk edit Eligible */}
              <button    onClick={handleManageClick} className="flex items-center justify-center px-3 py-2 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow">
                Manage
                <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
              </button>
              {isDropdownVisible && (
                <div className="absolute top-14 right-3 bg-white border rounded px-1 py-1">
                  <button className="block px-2 py-1 text-sm hover:text-white hover:bg-primary">
                    Edit Eligibles
                  </button>
                  {/* Tambahkan opsi dropdown lainnya jika diperlukan */}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="relative overflow-hidden ">
          <div className="px-3 pt-4 pb-4 overflow-x-auto">
            {/* Button Manage */}

            {/* card 1 */}
            <img src={profileImg} className="w-40 h-40 mx-auto rounded-2xl" />

            <h2 className="mt-4 text-2xl font-semibold text-center">
              {employeeData.fullname}
            </h2>
            <p className="mt-2 text-center font-lg">{employeeData.nip}</p>

            <div className="">
              <div className="my-4 rounded-t-lg shadow-md ">
                <div className="grid grid-cols-2 gap-5">
                  <div className="p-4 bg-white rounded-lg">
                    <h2 className="mb-2 text-lg font-semibold">Company Name</h2>
                    <p className="text-base">{employeeData.company_main}</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h2 className="mb-2 text-lg font-semibold">Directorate</h2>
                    <p className="text-base">{employeeData.directorate_main}</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h2 className="mb-2 text-lg font-semibold">Division</h2>
                    <p className="text-base">{employeeData.division_main}</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h2 className="mb-2 text-lg font-semibold">
                      Main Position
                    </h2>
                    <p className="text-base">{employeeData.main_position}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 1 */}

            {/* Tabel 1*/}
            <div className="">
              <div className="my-4 bg-white rounded-lg shadow-xl ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                        <h2 className="text-lg font-medium text-white">
                          Bank Information
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right rounded-tr-lg border-b-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="flex items-center pb-2 px-4">
                      {/* Kolom 1 */}
                      <td className="px-4 py-2 pl-0 text-left align-top border-b ">
                        <div className="flex items-center ">
                          <h2 className="text-base mr-5 ">Bank Account</h2>
                          <button className="bg-secondary text-pureBlack px-4 py-0 rounded hover:bg-yellow">
                            Account
                          </button>
                        </div>
                      </td>
                    </div>
                  </tbody>
                </table>
              </div>
              {/* Tabel 1*/}

              {/* Tabel 2*/}
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
                        <th className="w-1/2 px-4 py-2 text-right rounded-tr-lg border-b-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* Kolom 1 */}
                        <td className="px-4 py-2 text-left align-top ">
                          <div>
                            <h2 className="text-base ">Positional Allowance</h2>
                            <p className="pb-1 text-sm border-b pl-7">
                              Entitled
                            </p>
                          </div>
                        </td>
                        {/* Kolom 2 */}
                        <td className="px-4 py-2 text-left align-top">
                          <div>
                            <h2 className="text-base">Functional Allowance</h2>
                            <p className="pb-1 text-sm border-b pl-7">
                              Entitled
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Tabel 2*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibles;
