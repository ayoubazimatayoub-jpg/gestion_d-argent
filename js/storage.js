// js/storage.js

// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Create a single Supabase client for interacting with the database
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to save data to Supabase
export const saveData = async (table, data) => {
    const { data: result, error } = await supabase.from(table).insert(data);
    if (error) {
        console.error('Error saving data:', error);
        return null;
    }
    return result;
};

// Function to fetch data from Supabase
export const fetchData = async (table) => {
    const { data, error } = await supabase.from(table).select();
    if (error) {
        console.error('Error fetching data:', error);
        return null;
    }
    return data;
};

// Example usage:
// (async () => {
//     await saveData('my_table', { name: 'John', age: 30 });
//     const data = await fetchData('my_table');
//     console.log('Fetched data:', data);
// })();
