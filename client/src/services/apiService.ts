import { server } from '../config';
import { ThoughtRecordType } from '../types/types';

export const getThoughtRecords = async () => {
  try {
    const response = await fetch(server + '/thoughtRecords', {});
    const thoughtRecords = await response.json();
    return thoughtRecords;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const getThoughtRecordById = async (id: string) => {
  try {
    const response = await fetch(server + `/thoughtRecord?id=${id}`);
    const thoughtRecord = await response.json();
    return thoughtRecord;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postThoughtRecord = async (thoughtRecord: ThoughtRecordType) => {
  try {
    const response = await fetch(server + '/thoughtRecord', {
      method: 'POST',
      body: JSON.stringify(thoughtRecord),
    });
    const newThoughtRecord = await response.json();
    return newThoughtRecord;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const updateThoughtRecordById = async (
  thoughtRecordChanges: Partial<ThoughtRecordType>
) => {
  try {
    const response = await fetch(server + '/thoughtRecord', {
      method: 'PUT',
      body: JSON.stringify(thoughtRecordChanges),
    });
    const updatedThoughtRecord = await response.json();
    return updatedThoughtRecord;
  } catch (error) {
    console.log('Error:', error);
  }
};
