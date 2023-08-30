// Library & Package Import
import { useState, useEffect, useRef } from 'react';

// Assets Import
import {
  ThreeDotIcon,
  EditIcon,
  PreviewIcon,
  TrashIcon,
} from '../../assets/icons/icon';
const EmployeeBodyCard = () => {
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
                        role="button"
                        aria-label="Dropdown button"
                        onClick={() => toggleDropdown(index)}
                      >
                        <ThreeDotIcon className="w-5 h-5" />
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
                                className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                              >
                                <EditIcon className="w-4 h-4 mr-2" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                              >
                                <PreviewIcon className="w-4 h-4 mr-2" />
                                Preview
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-500"
                              >
                                <TrashIcon className="w-4 h-4 mr-2" />
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
};

export default EmployeeBodyCard;
