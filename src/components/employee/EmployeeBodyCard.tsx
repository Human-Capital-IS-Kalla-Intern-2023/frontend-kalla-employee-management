import { useState } from 'react';

export default function EmployeeBodyCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="py-3 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs uppercase ">
                <tr>
                  <th scope="col" className="px-4 py-4">
                    Full Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    NIK
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Jabatan Utama
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Jabatan Lainnya
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap "
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-27-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-20-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-imac-20-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-iphone-14-dropdown-button"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-iphone-14-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-iphone-14-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-ipad-air-dropdown-button"
                      data-dropdown-toggle="apple-ipad-air-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-ipad-air-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-ipad-air-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com </td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="xbox-series-s-dropdown-button"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-s-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="xbox-series-s-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com </td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="playstation-5-dropdown-button"
                      data-dropdown-toggle="playstation-5-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="playstation-5-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="playstation-5-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com </td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="xbox-series-x-dropdown-button"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-x-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="xbox-series-x-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-watch-se-dropdown-button"
                      data-dropdown-toggle="apple-watch-se-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-watch-se-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-watch-se-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full py-2"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com </td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan Lainnya</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="nikon-d850-dropdown-button"
                      data-dropdown-toggle="nikon-d850-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="nikon-d850-dropdown"
                      className="z-10 hidden bg-white divide-y rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="nikon-d850-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        {/* Other list items */}
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr className="">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-black whitespace-nowrap"
                  >
                    Nama Orang
                  </th>
                  <td className="px-4 py-3">1234567890123456</td>
                  <td className="px-4 py-3">Email@gmail.com </td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    Dummy Jabatan
                  </td>
                  <td className="px-4 py-3">Dummy Jabatan adwad</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="benq-ex2710q-dropdown-button"
                      data-dropdown-toggle="benq-ex2710q-dropdown"
                      className="inline-flex items-center text-sm font-medium  hover: p-1.5 hover- text-center   rounded-lg focus:outline-none  "
                      type="button"
                      onClick={toggleDropdown}
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="benq-ex2710q-dropdown"
                      className={`${
                        isDropdownOpen ? '' : 'hidden'
                      }  z-10 bg-white divide-y rounded shadow w-44`}
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="benq-ex2710q-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            data-modal-target="updateProductModal"
                            data-modal-toggle="updateProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="readProductModal"
                            data-modal-toggle="readProductModal"
                            className="flex items-center w-full px-4 py-2 hover: hover:text-white"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Preview
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-modal-target="deleteModal"
                            data-modal-toggle="deleteModal"
                            className="flex items-center w-full px-4 py-2 text-red-500 hover: hover:text-red-400"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
