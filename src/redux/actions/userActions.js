import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/signUp', async (userData) => {
  try {
    const response = await fetch('https://django.aakscience.com/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
