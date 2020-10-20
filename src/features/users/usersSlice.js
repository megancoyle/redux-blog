import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'John Smith' },
    { id: '1', name: 'Sarah Parker' },
    { id: '2', name: 'Anne Smith' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer