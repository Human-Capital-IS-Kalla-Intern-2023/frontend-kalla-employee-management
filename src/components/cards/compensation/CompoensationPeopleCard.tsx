import profileImg160 from '../../../assets/img/profile/profileimg-160.webp';
import HeaderCompensationCard from './HeaderCompensationCard';
import { ArrowButtonIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
function generateRandomData() {
  const fullname = 'Muh Thoriq Ali Said'; // Replace with a random full name generator
  const nip = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  const grade_name = 'Grade ' + (Math.floor(Math.random() * 10) + 1);
  const position_name = 'Human Capital IS';
  const company_name = 'Company ' + (Math.floor(Math.random() * 3) + 1);

  return {
    fullname,
    nip,
    grade_name,
    position_name,
    company_name,
  };
}

const CompoensationPeopleCard = () => {
  const employeeData = generateRandomData();

  return (
    <>
      <HeaderCompensationCard
        text={'Company - Month Year'}
        link={`/salary/compensation/detail
        `}
      />

      <div className="pt-6 pb-4 mx-8 overflow-x-auto rounded-md bg-third ">
        <div className="flex justify-end mb-6 ">
          <div className="px-3 py-1 mr-4 bg-transparent border rounded-md border-primary">
            <div className="flex items-center justify-center text-center ">
              <p className="text-base text-center uppercase lg:text-[17px] text-primary">
                Pay Slip
              </p>
              <ArrowButtonIcon className="w-6 h-8 ml-3 text-center" />
            </div>
          </div>
          <div>
            <Link to={`/salary/compensation/detail/people/edit`}>
              <button className="px-4 py-2 mr-8 text-white  lg:text-[17px] uppercase duration-300 border rounded-md border-primary bg-primary hover:bg-gray">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <img
          src={profileImg160}
          alt={`Image Profile ${employeeData.fullname}`}
          className="mx-auto rounded-2xl shadow-allSideLow"
          width={160}
          height={160}
        />

        <h2 className="mt-4 font-semibold text-center uppercase text-md sm:text-md md:text-lg lg:text-[22px]">
          {employeeData.fullname}
        </h2>
        <p className="pt-2 text-base italic font-medium text-center lg:text-md">
          {employeeData.nip}
        </p>
        <div className="flex items-center justify-center text-center">
          <p className="pt-2 text-base font-medium text-center uppercase lg:text-lg text-primary">
            {employeeData.position_name}
          </p>
          <ArrowButtonIcon className="w-6 h-8 ml-1 text-center" />
        </div>

        <div className="px-1 lg:px-10 lg:mx-2 lg:mt-10">
          <div className="my-4 rounded-t-lg">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div className="p-4 bg-white border-b-4 border-l-4 border-transparent rounded-lg shadow-allSideLow">
                <h2 className="mb-1 text-[17px] font-semibold uppercase text-grayBlack lg:mb-2 sm:text-md lg:text-md">
                  Fixed Pay
                </h2>
                <p className="text-base md:text-base lg:text-md">Rp. 0</p>
              </div>

              <div className="p-4 bg-white border-b-4 border-l-4 border-transparent rounded-lg shadow-allSideLow">
                <h2 className="mb-1 text-[17px] font-semibold uppercase text-grayBlack lg:mb-2 sm:text-md lg:text-md">
                  Deduction
                </h2>
                <p className="text-base md:text-base lg:text-md">Rp.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-1 lg:px-10 lg:mx-2 lg:mt-7">
          <div className="py-2 bg-white rounded-lg shadow-allSideLow">
            <div className="flex justify-between px-4 pt-4">
              <div className="flex items-center">
                <h2 className="text-[17px] font-semibold">Fixed Pay</h2>
              </div>
              <div className="flex items-center">
                <ArrowButtonIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 mx-11">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-10/12 text-sm"></th>
                    <th className="w-1/12 text-sm"></th>
                    <th className="w-1/12 text-sm"></th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-b border-slate-300 ">
                    <td className="w-9/12 py-3 text-sm">Text 1</td>
                    <td className="w-1/12 text-sm">Rp.</td>
                    <td className="text-sm font-semibold w- 2/12 text-end">
                      0
                    </td>
                  </tr>
                  <tr className="border-b border-slate-300 ">
                    <td className="py-3 text-sm">Text 2</td>
                    <td className="text-sm">Rp.</td>
                    <td className="text-sm font-semibold text-end">1000</td>
                  </tr>
                  <tr className="">
                    <td className="py-3 text-sm">Text 3</td>
                    <td className="text-sm">Rp.</td>
                    <td className="text-sm font-semibold text-end">20000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="px-1 lg:px-10 lg:mx-2 lg:mt-4">
          <div className="py-2 bg-white rounded-lg shadow-allSideLow">
            <div className="flex justify-between px-4 pt-4">
              <div className="flex items-center">
                <h2 className="text-[17px] font-semibold ">Deduction</h2>
              </div>
              <div className="flex items-center">
                <ArrowButtonIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 mx-11">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-10/12 text-sm"></th>
                    <th className="w-1/12 text-sm"></th>
                    <th className="w-1/12 text-sm"></th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-b border-slate-300 ">
                    <td className="w-9/12 py-3 text-sm">Text 1</td>
                    <td className="w-1/12 text-sm">Rp.</td>
                    <td className="text-sm font-semibold w- 2/12 text-end">
                      0
                    </td>
                  </tr>
                  <tr className="border-b border-slate-300 ">
                    <td className="py-3 text-sm">Text 2</td>
                    <td className="text-sm">Rp.</td>
                    <td className="text-sm font-semibold text-end">1000</td>
                  </tr>
                  <tr className="">
                    <td className="py-3 text-sm">Text 3</td>
                    <td className="text-sm">Rp.</td>
                    <td className="text-sm font-semibold text-end">20000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompoensationPeopleCard;
