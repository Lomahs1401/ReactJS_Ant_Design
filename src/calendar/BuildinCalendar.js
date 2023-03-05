import { Calendar } from 'antd';
const BuildinCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return <Calendar onPanelChange={onPanelChange} />;
};

export default BuildinCalendar;