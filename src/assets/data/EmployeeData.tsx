import { getPosition } from '../../api/PositionAPI';
const colCells = [
  { key: 'id', text: 'No' },
  { key: 'fullname', text: 'Full Name' },
  { key: 'nickname', text: 'Nickname' },
  { key: 'nip', text: 'NIP' },
  { key: 'company_email', text: 'Email' },
  { key: 'hire_date', text: 'Hire Date' },
  { key: 'main_position', text: 'Jabatan Utama' },
  { key: 'second_position', text: 'Jabatan Lainnya' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'fullname',
    label: 'Nama Karyawan',
    name: 'fullname',
    type: 'text',
  },
  {
    id: 'nip',
    label: 'NIP',
    name: 'nip',
    type: 'text',
  },
  {
    id: 'nickname',
    label: 'Nick Name',
    name: 'nickname',
    type: 'text',
  },
  {
    id: 'hire_date',
    label: 'Hire Date',
    name: 'hire_date',
    type: 'date',
  },
  {
    id: 'company_email',
    label: 'Company Email',
    name: 'company_email',
    type: 'email',
  },
  {
    id: 'main_position',
    label: 'Posisi Utama',
    name: 'id_main_position',
    type: 'select',
    options: [],
  },
  {
    id: 'second_position',
    label: 'Posisi Lainnya',
    name: 'id_additional_position',
    type: 'select',
    options: [],
  },
];

const fetchPositions = async () => {
  try {
    const responseData = await getPosition();
    const positionOptions = responseData.data.map((item: any) => ({
      label: item.position_name,
      value: item.id,
    }));

    // Temukan bidang 'Posisi Utama' dan 'Posisi Lainnya' dalam array inputField
    const mainPositionField = inputField.find(
      (field: any) => field.label === 'Posisi Utama'
    );
    const secondPositionField = inputField.find(
      (field: any) => field.label === 'Posisi Lainnya'
    );

    if (mainPositionField) {
      mainPositionField.options = positionOptions;
    }

    if (secondPositionField) {
      secondPositionField.options = positionOptions;
    }
  } catch (error) {
    console.error('Error fetching positions:', error);
  }
};

fetchPositions();

export { colCells, filterOptions, inputField };
