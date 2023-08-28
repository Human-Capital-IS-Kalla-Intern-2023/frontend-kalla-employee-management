export default function EmployeeBootomCard() {
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
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
