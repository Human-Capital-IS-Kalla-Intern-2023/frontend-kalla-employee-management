import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

interface CustomAlertProps {
  title: string;
  text: string;
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

export { ErrorAlert, SuccessAlert, WarningAlert };
