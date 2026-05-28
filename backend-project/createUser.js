import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const createDefaultUser = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

    const hashedPassword = await bcrypt.hash('1234567890', 10);
    
    await connection.query(
      'INSERT INTO Users (username, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = ?',
      ['salvo', hashedPassword, hashedPassword]
    );

    console.log('✅ Default user created successfully!');
    console.log('Username: salvo');
    console.log('Password: 1234567890');
    
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error('Error creating default user:', error);
    process.exit(1);
  }
};

createDefaultUser();
