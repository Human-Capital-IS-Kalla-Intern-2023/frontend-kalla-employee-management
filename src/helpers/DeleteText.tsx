export const DeleteText = (
  customCell: Record<string, any>,
  locationPathname: string
): string => {
  if (locationPathname.includes('/employee/detail/eligibles')) {
    return customCell.position_name;
  }
  if (locationPathname.includes('/employee')) {
    return customCell.fullname;
  } else if (locationPathname.includes('/posisi')) {
    return customCell.position_name;
  } else if (locationPathname.includes('/grade')) {
    return customCell.grade_name;
  } else if (locationPathname.includes('/business')) {
    return customCell.company_name;
  } else if (locationPathname.includes('/directorate')) {
    return customCell.directorat_name;
  } else if (locationPathname.includes('/division')) {
    return customCell.division_name;
  } else if (locationPathname.includes('/section')) {
    return customCell.section_name;
  } else if (locationPathname.includes('/location')) {
    return customCell.location_name;
  } else if (locationPathname.includes('/salary/regulation')) {
    return customCell.component_name;
  } else if (locationPathname.includes('/salary/configures')) {
    return customCell.salary_name;
  } else if (locationPathname.includes('/salary/compensation')) {
    return customCell.compensation_name;
  }
  return '';
};
