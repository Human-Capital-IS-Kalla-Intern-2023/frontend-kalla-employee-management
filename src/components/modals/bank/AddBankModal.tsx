import { CloseButtonIcon } from '../../../assets/icons/icon';

type ModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  bankData: {
    type_bank: string;
    account_name: string;
    account_number: string;
  };
  setBankData: (data: any) => void;
  handleAddBank: () => void;
};

const AddBankModal = ({
  isModalOpen,
  handleCloseModal,
  bankData,
  setBankData,
  handleAddBank,
}: ModalProps) => {
  return isModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-2/5 bg-white rounded-md shadow-md">
        <header className="flex items-center justify-between p-4">
          <h2 className="p-2 text-lg font-medium border-b-2 border-primary">
            Add Bank Data
          </h2>
          <button
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700"
            onClick={handleCloseModal}
          >
            <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-800 hover:text-white" />
          </button>
        </header>
        <div className="px-4 py-2">
          <label htmlFor="input" className="block font-medium text-gray-700">
            Employee Name
          </label>
          <input
            type="text"
            id="account_name"
            name="account_name"
            placeholder="Account Name"
            value={bankData.account_name}
            onChange={(e) =>
              setBankData({
                ...bankData,
                account_name: e.target.value,
              })
            }
            className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="px-4 py-2">
          <label htmlFor="input" className="block font-medium text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            id="account_number"
            name="account_number"
            placeholder="Account Number"
            value={bankData.account_number}
            onChange={(e) =>
              setBankData({
                ...bankData,
                account_number: e.target.value,
              })
            }
            className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="px-4 py-2">
          {/* Konten modal */}
          <div className="mb-4">
            <label
              htmlFor="dropdown"
              className="block font-medium text-gray-700"
            >
              Select Bank
            </label>

            <select
              id="type-dropdown"
              name="type-dropdown"
              value={bankData.type_bank}
              onChange={(e) =>
                setBankData({
                  ...bankData,
                  type_bank: e.target.value,
                })
              }
              className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="" disabled>
                Select Bank Name
              </option>
              <option value="Mandiri">Bank Mandiri</option>
              <option value="BRI">Bank BRI</option>
              <option value="BNI">Bank BNI</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end w-full p-4 rounded-t-none shadow-inner rounded-b-md border-gray bg-slate-200">
          <button
            aria-label="Cancel"
            className="px-4 py-2 mx-2 text-white duration-300 bg-red-800 rounded-md hover:bg-gray"
            onClick={handleCloseModal}
          >
            CANCEL
          </button>
          <button
            aria-label="Add"
            className="px-4 py-2 text-white duration-300 rounded-md bg-primary hover-bg-gray"
            onClick={handleAddBank}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddBankModal;
