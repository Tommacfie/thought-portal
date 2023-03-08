import { server } from '../config';
import {
  CreateJournalEntryType,
  JournalEntryType,
  ThoughtRecordType,
} from '../types/types';

export const getThoughtRecords = async () => {
  try {
    const response = await fetch(server + '/thoughtRecords', {});
    const thoughtRecords = await response.json();
    return thoughtRecords;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const getJournalEntries = async () => {
  try {
    const response = await fetch(server + '/journalEntries', {});
    const journalEntries = await response.json();
    return journalEntries;
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

export const getJournalEntryById = async (id: string | undefined) => {
  if (id == null) return;
  try {
    const response = await fetch(server + `/journalEntry?id=${id}`);
    const journalEntry = await response.json();
    return journalEntry;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postThoughtRecord = async (thoughtRecord: ThoughtRecordType) => {
  try {
    const response = await fetch(server + '/thoughtRecord', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(thoughtRecord),
    });
    const newThoughtRecord = await response.json();
    return newThoughtRecord;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postJournalEntry = async (
  journalEntry: CreateJournalEntryType
) => {
  try {
    const response = await fetch(server + '/journalEntry', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(journalEntry),
    });
    const newJournalEntry = await response.json();
    return newJournalEntry;
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
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(thoughtRecordChanges),
    });
    const updatedThoughtRecord = await response.json();
    return updatedThoughtRecord;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const updateJournalEntryById = async (
  journalEntryChanges: Partial<JournalEntryType>
) => {
  try {
    const response = await fetch(server + '/journalEntry', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(journalEntryChanges),
    });
    const updatedJournalEntry = await response.json();
    return updatedJournalEntry;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const deleteThoughtRecord = async (id: string) => {
  try {
    const response = await fetch(server + `/journalEntry?id=${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    const updatedJournalEntry = await response.json();
    return updatedJournalEntry;
  } catch (error) {
    console.log('Error:', error);
  }
};
