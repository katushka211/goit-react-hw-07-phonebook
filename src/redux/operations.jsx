import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6486f554beba6297278f9042.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllontacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
