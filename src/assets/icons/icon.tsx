interface SvgIconProps {
  className?: string;
  onClick?: () => void;
}

const OpenEyeIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    onClick={onClick}
  >
    <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
  </svg>
);

const CloseEyeIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    onClick={onClick}
  >
    <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z" />
    <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.708z" />
  </svg>
);

const ThreeDotIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);
const EditIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
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
);

const PreviewIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
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
);

const TrashIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={className}
  >
    <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
  </svg>
);

const LeftArrowIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
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
);

const RightArrowIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
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
);

const SearchIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const PlusIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
    />
  </svg>
);

const ArrowButtonIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    />
  </svg>
);

export {
  ThreeDotIcon,
  EditIcon,
  PreviewIcon,
  TrashIcon,
  LeftArrowIcon,
  RightArrowIcon,
  SearchIcon,
  PlusIcon,
  ArrowButtonIcon,
  OpenEyeIcon,
  CloseEyeIcon,
};
