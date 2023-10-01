// Import Library & Package
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

interface CustomAlertProps {
  title: string;
  text: string;
  timer?: number;
}

interface ConfirmationAlertProps {
  title: string;
  text: string;
  onConfirm: () => void;
  timer?: number;
}

interface DeleteConfimationAlert {
  title: string;
  text: string;
  detail: string;
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
  timer,
  onConfirm,
}) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    timer: timer,
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });

  return null;
};

const DeleteConfimationAlert: React.FC<DeleteConfimationAlert> = ({
  title,
  text,
  detail,
  onConfirm,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DA4445',
    cancelButtonColor: '#8388A4',
    confirmButtonText: 'Yes, delete it!',
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire('Deleted!', detail, 'success');
    }
  });

  return null;
};

export {
  ErrorAlert,
  SuccessAlert,
  WarningAlert,
  ConfirmationAlert,
  DeleteConfimationAlert,
};
