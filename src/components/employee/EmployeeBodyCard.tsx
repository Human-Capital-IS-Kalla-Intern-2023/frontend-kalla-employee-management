import { useState, useEffect, useRef } from 'react';

export default function EmployeeBodyCard() {
  const [activeDropdown, setActiveDropdown] = useState<number | null | boolean>(
    null
  );

  const scrollRef = useRef(false);

  const toggleDropdown = (rowIndex: number) => {
    setActiveDropdown((prevIndex) =>
      prevIndex === rowIndex ? null : rowIndex
    );
  };

  const closeFilterDropdown = () => {
    setActiveDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        closeFilterDropdown();
        scrollRef.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = true;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  interface EmployeeData {
    fullName: string;
    nik: string;
    email: string;
    jabatanUtama: string;
    jabatanLainnya: string;
  }

  const data = [
    {
      fullName: 'John Doe',
      nik: '1234567890123456',
      email: 'john.doe@example.com',
      jabatanUtama: 'Manager',
      jabatanLainnya: 'Supervisor',
    },
    {
      fullName: 'Jane Smith',
      nik: '7890123456123456',
      email: 'jane.smith@example.com',
      jabatanUtama: 'Supervisor',
      jabatanLainnya: 'Team Lead',
    },
    {
      fullName: 'Michael Johnson',
      nik: '4567890123456789',
      email: 'michael.johnson@example.com',
      jabatanUtama: 'Associate',
      jabatanLainnya: 'Assistant',
    },
    {
      fullName: 'Emily Williams',
      nik: '2345678901234567',
      email: 'emily.williams@example.com',
      jabatanUtama: 'Associate',
      jabatanLainnya: 'Intern',
    },
    {
      fullName: 'Robert Brown',
      nik: '6789012345678901',
      email: 'robert.brown@example.com',
      jabatanUtama: 'Manager',
      jabatanLainnya: 'Supervisor',
    },
    {
      fullName: 'John Doe',
      nik: '1234567890123456',
      email: 'john.doe@example.com',
      jabatanUtama: 'Manager',
      jabatanLainnya: 'Supervisor',
    },
    {
      fullName: 'Jane Smith',
      nik: '7890123456123456',
      email: 'jane.smith@example.com',
      jabatanUtama: 'Supervisor',
      jabatanLainnya: 'Team Lead',
    },
    {
      fullName: 'Michael Johnson',
      nik: '4567890123456789',
      email: 'michael.johnson@example.com',
      jabatanUtama: 'Associate',
      jabatanLainnya: 'Assistant',
    },
    {
      fullName: 'Emily Williams',
      nik: '2345678901234567',
      email: 'emily.williams@example.com',
      jabatanUtama: 'Associate',
      jabatanLainnya: 'Intern',
    },
    {
      fullName: 'Robert Brown',
      nik: '6789012345678901',
      email: 'robert.brown@example.com',
      jabatanUtama: 'Manager',
      jabatanLainnya: 'Supervisor',
    },
  ];

  return (
    <section className="py-3 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
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
                {data.map((employee: EmployeeData, index: number) => (
                  <tr
                    className={`border-b ${
                      index === data.length - 1 ? 'border-none' : ''
                    } ${activeDropdown === index ? 'bg-slate-200' : ''}`}
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-black whitespace-nowrap"
                    >
                      {employee.fullName}
                    </th>
                    <td className="px-4 py-3">{employee.nik}</td>
                    <td className="px-4 py-3">{employee.email}</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">
                      {employee.jabatanUtama}
                    </td>
                    <td className="px-4 py-3">{employee.jabatanLainnya}</td>
                    <td className="flex items-center justify-end px-4 py-3 ">
                      <button
                        id={`dropdown-button-${index}`}
                        className="inline-flex items-center text-sm font-medium rounded-lg hover:text-center "
                        type="button"
                        onClick={() => toggleDropdown(index)}
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
                      {activeDropdown === index && (
                        <div
                          className={`absolute right-0 z-10 mr-10 bg-white divide-y rounded shadow-2xl w-44 ${
                            index === data.length - 1 ? 'mb-20' : ''
                          }`}
                        >
                          <ul className="py-1 text-sm">
                            <li>
                              <button
                                type="button"
                                data-modal-target="updateProductModal"
                                data-modal-toggle="updateProductModal"
                                className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
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
                            <li>
                              <button
                                type="button"
                                data-modal-target="readProductModal"
                                data-modal-toggle="readProductModal"
                                className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
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
                                    fillRule="evenodd"
                                    clipRule="evenodd"
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
                                className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-500"
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
