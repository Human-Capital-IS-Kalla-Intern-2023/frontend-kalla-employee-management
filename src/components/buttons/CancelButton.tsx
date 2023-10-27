import React from 'react';

const CancelButton = (cancelHandler: any) => {
  return (
    <button
      aria-label="Cancel"
      className="px-1 py-2 mr-2 text-white duration-300 bg-red-800 rounded-md lg:px-4 lg:py-2 lg:mr-4 hover:bg-graylg:hover:scale-[1.03]"
      onClick={cancelHandler}
    >
      CANCEL
    </button>
  );
};

export default CancelButton;
