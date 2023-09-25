// Import Library & Package
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

interface CustomAlertProps {
  title: string;
  text: string;
  duration?: number;
}

interface ConfirmationAlertProps {
  title: string;
  text: string;
  onConfirm: () => void;
}

const ErrorAlert: React.FC<CustomAlertProps> = ({ title, text }) => {
  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  }, [title, text]);

  return null;
};

const SuccessAlert: React.FC<CustomAlertProps> = ({ title, text }) => {
  useEffect(() => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }, [title, text]);

  return null;
};

const WarningAlert: React.FC<CustomAlertProps> = ({ title, text }) => {
  useEffect(() => {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
    });
  }, [title, text]);

  return null;
};

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({
  title,
  text,
  onConfirm,
}) => {
  // Tampilkan SweetAlert konfirmasi OK dan navigasi saat OK dikonfirmasi
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm(); // Panggil fungsi onConfirm saat tombol OK diklik
    }
  });

  return null;
};

export { ErrorAlert, SuccessAlert, WarningAlert, ConfirmationAlert };
