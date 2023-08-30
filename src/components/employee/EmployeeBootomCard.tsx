// Assets Import
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons/icon';

const EmployeeBootomCard = () => {
  return (
    <section className="py-3 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal ">
              Showing <span className="font-semibold text-black">10 {''}</span>
              of {''}
              <span className="font-semibold text-black">1000</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0  bg-white rounded-l-lg border   hover:bg-primary    border-pureBlack hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <LeftArrowIcon className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight bg-white border hover:bg-primary border-pureBlack hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight bg-white border hover:bg-primary border-pureBlack hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight text-black border bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight bg-white border hover:bg-primary border-pureBlack hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight bg-white border hover:bg-primary border-pureBlack hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight  bg-white rounded-r-lg border hover:bg-primar border-pureBlackhover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <RightArrowIcon className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EmployeeBootomCard;
