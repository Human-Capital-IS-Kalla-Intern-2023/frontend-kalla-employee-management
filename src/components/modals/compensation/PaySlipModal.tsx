import { CloseButtonIcon, PDFIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';

const PaySlipModal = ({ onClose, payslipData }: any) => {
  const { employeeCompensationId } = useParams();

  const formatValue = (value: any) => {
    if (typeof value === 'number') {
      return new Intl.NumberFormat('id-ID').format(value);
    }
    return '';
  };
  const handleGeneratePDF = () => {
    const content = document.getElementById('payslip-content');

    if (content) {
      // Set the width and height to '100%' using CSS
      content.style.width = '100%';
      content.style.height = '100%';
      content.style.justifyContent = 'center';
      content.style.margin = '0px';
      content.style.padding = '15px';
      content.style.background = '#FFF';
      content.style.boxShadow = 'none';
      content.style.maxHeight = 'fit-content';

      // Remove the "PDF" button and close button from the content
      const pdfButton = document.getElementById('pdf-button');
      const closeButton = document.getElementById('close-button');
      const confedentialText = document.getElementById('confedential');

      if (pdfButton && closeButton) {
        pdfButton.style.display = 'none';
        closeButton.style.display = 'none';
      }

      if (confedentialText) {
        confedentialText.style.paddingBottom = '25px';
      }

      // Style the content for PDF
      html2pdf()
        .from(content)
        .outputPdf('datauristring') // Output PDF as data URI
        .then((pdfString: any) => {
          // Convert data URI to Blob
          const pdfBlob = dataURItoBlob(pdfString);

          // Custom file name for the PDF
          const fileName = `${payslipData.employee_compensation_name} - ${payslipData.nip} - ${payslipData.fullname}`;

          // Create a URL for the Blob
          const blobURL = URL.createObjectURL(pdfBlob);

          // Create an anchor element for downloading
          const downloadLink = document.createElement('a');
          downloadLink.href = blobURL;
          downloadLink.download = fileName; // Set the custom file name

          // Click the anchor element to trigger the download
          downloadLink.click();

          // Restore the original content styles
          content.style.width = '';
          content.style.height = '';
          content.style.justifyContent = '';
          content.style.margin = '';
          content.style.padding = '';
          content.style.background = '';
          content.style.boxShadow = '';

          // Restore the "PDF" button and close button
          if (pdfButton && closeButton) {
            pdfButton.style.display = 'flex';
            closeButton.style.display = 'flex';
          }
          if (confedentialText) {
            confedentialText.style.paddingBottom = '';
          }
        })
        .catch((error: any) => {
          console.error('Error generating PDF:', error);
          // Ensure the styles are reset in case of an error
          content.style.width = '';
          content.style.justifyContent = '';
          content.style.height = '';
          content.style.margin = '';
          content.style.padding = '';
          content.style.background = '';
          content.style.paddingBottom = '';

          content.style.boxShadow = '';

          // Restore the "PDF" button and close button
          if (pdfButton && closeButton) {
            pdfButton.style.display = 'flex';
            closeButton.style.display = 'flex';
          }
        });
    }
  };

  // Function to convert data URI to Blob
  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const groupedComponents = payslipData.salary_components.reduce(
    (result: any, component: any) => {
      if (component.type === 'fixed pay') {
        result.income.push(component);
      } else if (component.type === 'deductions') {
        result.deduction.push(component);
      }
      return result;
    },
    { income: [], deduction: [] }
  );

  return (
    <div
      className={`fixed inset-0 flex  items-center justify-center scrollbar-hide  overflow-y-scroll   z-[1000] bg-opacity-50`}
    >
      <div
        className="w-4/6 p-6 mb-5 bg-white rounded-lg shadow-lg mt-44 max-h-fit"
        id="payslip-content"
      >
        <div className="flex items-center justify-between">
          <h2 className="py-1 text-lg font-semibold border-b-2 border-primary">
            Pay Slip
          </h2>
          <div className="flex items-center space-x-2">
            <button
              id="pdf-button"
              className="flex items-center px-3 border rounded-md hover:bg-primary hover:border-primary hover:text-white"
              onClick={handleGeneratePDF}
            >
              <PDFIcon className="w-10 h-10 p-2 duration-300 " />
              <span>PDF</span>
            </button>

            <button onClick={onClose} id="close-button">
              <Link
                to={`/salary/compensation/detail/people/${employeeCompensationId}`}
              >
                <CloseButtonIcon className="w-10 h-10 p-2 duration-300 rounded-full hover:bg-red-800 hover:text-white" />
              </Link>
            </button>
          </div>
        </div>

        <hr className="my-2 border-slate-300" />

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-[17px] font-extrabold">
              {payslipData.employee_compensation_name}
            </p>
            <p className="text-base font-medium">{payslipData.company_name}</p>
            <p className="mt-1 text-[15px] text-gray">
              {payslipData.bulan} {payslipData.tahun}
            </p>
          </div>
          <button
            className="px-5 py-1 mb-8 mr-5 text-lg font-semibold text-red-800 border border-red-800 rounded-md bg-transparentrounded-md"
            id="confedential"
          >
            Confidential
          </button>
        </div>

        <div className="mt-5">
          <p className="text-[17px] mt-4 font-semibold">Informasi Pribadi</p>
          <div className="flex justify-between mt-1 mr-32">
            <div>
              <p className="py-1">Nama:</p>
              <p className="py-1">NIP:</p>
              <p className="py-1">Position:</p>
            </div>
            <div>
              <p className="py-1">{payslipData.fullname}</p>
              <p className="py-1">{payslipData.nip}</p>
              <p className="py-1">{payslipData.position_name}</p>
            </div>
            <div className="ml-12">
              <p className="py-1">Location:</p>
              <p className="py-1">Company:</p>
            </div>
            <div className="mr-10">
              <p className="py-1 ">{payslipData.location_name}</p>
              <p className="py-1">{payslipData.company_name}</p>
            </div>
          </div>
        </div>

        <div className="inset-0 flex items-start justify-center space-x-4">
          {/* Display income components */}
          <div className="flex justify-between w-2/3 mt-6 rounded-md">
            <div className="w-2/3 bg-slate-100 rounded-tl-md">
              <p className="py-3 pl-2 mb-4 text-white bg-primary rounded-tl-md">
                Penghasilan
              </p>
              {groupedComponents.income.map((component: any) => (
                <div key={component.component_id}>
                  <p className="py-2 pl-2 text-[15px] text-grayBlack">
                    {component.component_name}
                  </p>
                </div>
              ))}
              <p className="py-3 pl-2 mt-4 text-white text-[15px] bg-primary rounded-bl-md">
                Total
              </p>
            </div>
            <div className="w-1/3 bg-slate-100 rounded-tr-md">
              <p className="py-3 pl-2 mb-4 text-white bg-primary rounded-tr-md">
                Jumlah
              </p>
              {groupedComponents.income.map((component: any) => (
                <div key={component.component_id}>
                  <p className="py-2 pl-2 text-[15px]">
                    <span className="text-grayBlack">Rp.</span>{' '}
                    {formatValue(component.nominal)}
                  </p>
                </div>
              ))}
              <p className="py-3 pl-2 mt-4 text-[15px] text-white rounded-br-md bg-primary">
                Rp. {formatValue(payslipData.fixed_pay)}
              </p>
            </div>
          </div>
          {/* Display deduction components */}
          <div className="flex justify-between w-2/3 mt-6 rounded-md">
            <div className="w-2/3 bg-slate-100 rounded-tl-md">
              <p className="py-3 pl-2 mb-4 text-white bg-red-800 rounded-tl-md">
                Pengeluaran
              </p>
              {groupedComponents.deduction.map((component: any) => (
                <div key={component.component_id}>
                  <p className="py-2 pl-2 text-[15px] text-grayBlack">
                    {component.component_name}
                  </p>
                </div>
              ))}
              <p className="py-3 pl-2 mt-4 text-white bg-red-800 text-[15px]  rounded-bl-md">
                Total
              </p>
            </div>
            <div className="w-1/3 bg-slate-100 rounded-tr-md">
              <p className="py-3 pl-2 mb-4 text-white bg-red-800 rounded-tr-md">
                Jumlah
              </p>
              {groupedComponents.deduction.map((component: any) => (
                <div key={component.component_id}>
                  <p className="py-2 pl-2 text-[15px] ">
                    <span className="text-grayBlack ">Rp.</span>{' '}
                    {formatValue(component.nominal)}
                  </p>
                </div>
              ))}
              <p className="py-3 pl-2 mt-4 text-white text-[15px]  bg-red-800 rounded-br-md">
                Rp. {formatValue(payslipData.deductions)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 mt-6 rounded-md bg-slate-100 total-payslip">
          <div className="">
            <p className="text-[17px] font-semibold">Total PaySlip</p>
          </div>
          <div className="flex items-center mt-3 space-x-6">
            <div className="">
              <div>
                <span className="text-primary text-[17px] ">
                  Rp. {formatValue(payslipData.fixed_pay)}
                </span>
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
                <span className="text-red-800 text-[17px] ">
                  Rp. {formatValue(payslipData.deductions)}
                </span>
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
                <span className="text-[17px] ">
                  Rp. {formatValue(payslipData.total_pay)}
                </span>
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
