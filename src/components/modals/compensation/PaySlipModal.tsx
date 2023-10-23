import { CloseButtonIcon, PDFIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
const PaySlipModal = ({ onClose }: any) => {
  return (
    <div
      className={`fixed inset-0 flex  items-center justify-center  overflow-y-scroll z-[1000] bg-opacity-50`}
    >
      <div className="w-4/6 p-6 mt-32 mb-5 ml-56 bg-white rounded-lg shadow-lg max-h-fit ">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold border-b-2 border-primary">
            Pay Slip
          </h2>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 border rounded-md hover:bg-primary hover:border-primary hover:text-white">
              <PDFIcon className="w-10 h-10 p-2 duration-300 " />
              <span>PDF</span>
            </button>
            <button onClick={onClose}>
              <Link to={`/salary/compensation/detail/people`}>
                <CloseButtonIcon className="w-10 h-10 p-2 duration-300 rounded-full hover:bg-red-800 hover:text-white" />
              </Link>
            </button>
          </div>
        </div>

        <hr className="my-2 border-slate-300" />

        <div className="mt-4">
          <p className="text-[17px] font-extrabold">HDLG - Oktober 2023</p>
          <p className="text-base font-medium">PT Hadji Kalla (Holding)</p>
          <p className="mt-1 text-[15px] text-gray">Date 2023 - Date 2023</p>
        </div>

        <div className="mt-8">
          <p className="text-[17px] mt-4 font-semibold">Informasi Pribadi</p>
          <div className="flex justify-between mt-1">
            <div>
              <p className="py-1">Nama:</p>
              <p className="py-1">NIK:</p>
              <p className="py-1">Position:</p>
            </div>
            <div>
              <p className="py-1">Text</p>
              <p className="py-1">Text</p>
              <p className="py-1">Text</p>
            </div>
            <div>
              <p className="py-1">Location:</p>
              <p className="py-1">Company:</p>
            </div>
            <div>
              <p className="py-1">Text</p>
              <p className="py-1">Text</p>
            </div>
          </div>
        </div>

        <div className="inset-0 flex items-center justify-center space-x-4">
          <div className="flex justify-between w-1/2 mt-6 rounded-md">
            <div className="w-2/3 bg-slate-200 rounded-tl-md">
              <p className="py-3 pl-2 mb-4 text-white bg-primary rounded-tl-md">
                Penghasilan
              </p>
              <div>
                <p className="py-2 pl-2">Text</p>
                <p className="py-2 pl-2">Text</p>
                <p className="py-2 pl-2">Text</p>
                <p className="py-3 pl-2 mt-4 text-white bg-primary rounded-bl-md">
                  Total
                </p>
              </div>
            </div>
            <div className="w-1/3 bg-slate-200 rounded-tr-md">
              <p className="py-3 pl-2 mb-4 text-white bg-primary rounded-tr-md ">
                Jumlah
              </p>
              <div>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-3 pl-2 mt-4 text-white rounded-br-md bg-primary">
                  Total
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-1/2 mt-6 rounded-md ">
            <div className="w-2/3 bg-slate-200 rounded-tl-md">
              <p className="py-3 pl-2 mb-4 text-white bg-red-800 rounded-tl-md">
                Pengeluaran
              </p>
              <div>
                <p className="py-2 pl-2">Text</p>
                <p className="py-2 pl-2">Text</p>
                <p className="py-2 pl-2">Text</p>
                <p className="py-3 pl-2 mt-4 text-white bg-red-800 rounded-bl-md">
                  Total
                </p>
              </div>
            </div>
            <div className="w-1/3 bg-slate-200 rounded-tr-md">
              <p className="py-3 pl-2 mb-4 text-white bg-red-800 rounded-tr-md">
                Jumlah
              </p>
              <div>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-2 pl-2 ">
                  <span className="">Rp.</span> 0
                </p>
                <p className="py-3 pl-2 mt-4 text-white bg-red-800 rounded-br-md">
                  Total
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 mt-6 rounded-md bg-slate-200 ">
          <div className="">
            <p className="text-[17px] font-semibold">Total PaySlip</p>
          </div>
          <div className="flex items-center mt-3 space-x-6">
            <div className="">
              <div>
                <span className="text-primary text-[17px] ">Rp. 0</span>
              </div>
              <div>
                <span className="text-grayBlack text-[15px] ">
                  Total Penghasilan
                </span>
              </div>
            </div>
            <div className="">
              <span className=" text-[17px] ">-</span>
            </div>
            <div className="">
              <div>
                <span className="text-red-800 text-[17px] ">Rp. 0</span>
              </div>
              <div>
                <span className="text-grayBlack text-[15px] ">
                  Total Pengeluaran
                </span>
              </div>
            </div>
            <div className="">
              <span className=" text-[17px] ">=</span>
            </div>
            <div className="">
              <div>
                <span className="text-[17px] ">Rp. 0</span>
              </div>
              <div>
                <span className="text-grayBlack text-[15px] ">
                  Total Payslip
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySlipModal;
