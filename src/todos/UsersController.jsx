import React, { useEffect } from 'react';
import users from './users';
// TODO - 2
// Import variabel users dari file users.js

const UsersController = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            console.log("Seluruh nama users:");
            await formatUser(users);
            console.log("Pengguna dengan nama tertentu:");
            await findByName(users, 'Joko');
            console.log("Pengguna berdasarkan jurusan:");
            await filterByMajor(users, 'Web');
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div>
            <h3>Cek hasilnya pada konsol</h3>
        </div>
    );
}
// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user

const formatUser = async (dataUsers) => {
    try {
        const userNames = dataUsers.map((user) => user.name);
        console.log(userNames);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (dataUsers, name) => {
    try {
        const user = dataUsers.find((user) => user.name === name);
        console.log(user);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (dataUsers, major) => {
    try {
        const filterMajor = dataUsers.filter((user) => user.major === major);
        console.log(filterMajor);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

export default UsersController;
