// Library & Package Import
import { useState, useEffect, useRef } from 'react';

// Assets Import
import {
  ThreeDotIcon,
  EditIcon,
  PreviewIcon,
  TrashIcon,
} from '../../assets/icons/icon';

interface ColCells {
  key: string;
  text: string;
}

interface CustomTabelBodyProps {
  colCells: ColCells[];
  data?: any[];
}

const TabelBody = (props: CustomTabelBodyProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null | boolean>(
    null
  );
  const { colCells, data } = props;

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

  return (
    <section className="py-3 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  {colCells.map((cell, index) => (
                    <th key={index} scope="col" className="px-4 py-4">
                      {cell.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((customCell: any, index: number) => (
                    <tr
                      className={`border-b ${
                        index === data.length - 1 ? 'border-none' : ''
                      } ${activeDropdown === index ? 'bg-slate-200' : ''}`}
                      key={index}
                    >
                      {colCells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-3 font-medium text-black whitespace-nowrap"
                        >
                          {customCell[cell.key]}
                        </td>
                      ))}

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
                  ))
                ) : (
                  <tr>
                    <td colSpan={colCells.length}> </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelBody;
