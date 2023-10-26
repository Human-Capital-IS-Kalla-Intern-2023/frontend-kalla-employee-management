import CompensationDetailCard from '../../../components/cards/compensation/CompensationDetailCard';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailCompensation } from '../../../api/CompensationAPI';
import ReactLoading from 'react-loading';

const CompensationDetail = () => {
  const { compensationId } = useParams();
  const [compensationData, setCompensationData] = useState<any | null>(null);

  const fetchCompensationData = async (compensationId: string) => {
    try {
      const response = await getDetailCompensation(compensationId);
      setCompensationData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (compensationId) {
      fetchCompensationData(compensationId);
    }
  }, [compensationId]);

  if (!compensationData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }
  return (
    <>
      <CompensationDetailCard compensationData={compensationData} />
    </>
  );
};

export default CompensationDetail;
