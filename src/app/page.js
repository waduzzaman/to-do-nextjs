"use client"
import DateTimeInput from '@/components/DateTimeInput';
import React, { useState, useEffect } from 'react';


const App = () => {
    const [userInput, setUserInput] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // Load tasks from localStorage when the app starts
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('tasks'));
        if (savedList) {
            setList(savedList);
        }
    }, []);

    // Save tasks to localStorage whenever the list is updated
    useEffect(() => {
        if (list.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(list));
        }
    }, [list]);

    const handleAction = () => {
        if (
            userInput.trim() === '' ||
            startDate.trim() === '' ||
            endDate.trim() === ''
        ) {
            alert('Please provide task details, start date, and expected end date.');
            return;
        }

        if (editIndex !== null) {
            const updatedList = list.map((item, index) =>
                index === editIndex
                    ? { ...item, value: userInput, startDate, endDate }
                    : item
            );
            setList(updatedList);
            setEditIndex(null);
        } else {
            const newItem = {
                id: Math.random(),
                value: userInput,
                isDeleted: false,
                startDate,
                endDate,
            };
            setList([...list, newItem]);
        }

        setUserInput('');
        setStartDate('');
        setEndDate('');
    };

    const toggleDelete = (id) => {
        const updatedList = list.map((item) =>
            item.id === id ? { ...item, isDeleted: !item.isDeleted } : item
        );
        setList(updatedList);
    };

    const startEdit = (index) => {
        if (!list[index].isDeleted) {
            setUserInput(list[index].value);
            setStartDate(list[index].startDate);
            setEndDate(list[index].endDate);
            setEditIndex(index);
        }
    };

    return (
        <div className="font-sans max-w-xl mx-auto p-6">
            <div className="text-center text-4xl font-bold mb-6 text-green-600">
               Your To-Do List
            </div>
            <div className="flex flex-col space-y-4 mb-6">
                {/* Task Input */}
                <div className="relative">
                    <legend className="absolute left-0 top-0 text-lg">Task Name</legend>
                    <input
                        className="text-lg p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600 text-black mt-8 w-full"
                        placeholder={editIndex !== null ? 'Edit item...' : 'Add item...'}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                </div>
                {/* Start Date Input using DateTimeInput */}
                <DateTimeInput
                    label="Start Date" 
                    value={startDate}
                    onChange={(newDate) => setStartDate(newDate)}
                />
                {/* End Date Input using DateTimeInput */}
                <DateTimeInput
                    label="Expected End Date"
                    value={endDate}
                    onChange={(newDate) => setEndDate(newDate)}
                />
                <button
                    className="text-lg px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none w-full"
                    onClick={handleAction}
                >
                    {editIndex !== null ? 'Update' : 'ADD'}
                </button>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
                {list.length > 0 ? (
                    list.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-start mb-4"
                        >
                            <div
                                className={`flex-grow ${item.isDeleted ? 'line-through text-gray-400' : 'text-slate-800'}`}
                            >
                                <span className="text-lg">{index + 1}. {item.value}</span>
                                <br />
                                <span className="text-sm text-gray-500">
                                    Start: {item.startDate}
                                </span>
                                <br />
                                <span className="text-sm text-gray-500">
                                    End: {item.endDate}
                                </span>
                            </div>
                            <div className="space-x-3 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={item.isDeleted}
                                    onChange={() => toggleDelete(item.id)}
                                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                                />
                                <button
                                    className={`px-4 py-2 rounded focus:outline-none ${item.isDeleted ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                    onClick={() => startEdit(index)}
                                    disabled={item.isDeleted}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-lg text-gray-500">
                        No items in the list
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
