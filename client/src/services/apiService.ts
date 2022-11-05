import { server } from '../config';

export const getThoughtRecords = async () => {
  try {
    const response = await fetch(server + '/thoughtRecords', {});
    const thoughtRecords = await response.json();
    console.log(thoughtRecords);
    return thoughtRecords;
  } catch (error) {
    console.log('Error:', error);
  }
};
