#  Student Portal Management System

A Full Stack Student Portal developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

## Features

### Student
- Login to portal
- View attendance
- View results
- View courses
- View timetable

### Teacher
- Login to portal
- View all students
- Edit student records
- Update attendance, results, courses, and timetable

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

## Project Structure

```
Decodelabs_internships/
│
├── index.html
├── dashboard.html
├── teacher-dashboard.html
├── script.js
├── style.css
│
└── backend/
    ├── server.js
    ├── db.js
    ├── package.json
```

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start MongoDB

```bash
mongod
```

### 3. Start Backend

```bash
node server.js
```

### 4. Open Application

Open:

```text
index.html
```

## Sample Login Credentials

### Teacher

```
Username: teacher
Password: teacher123
```

### Student

```
Username: student
Password: student123
```

## Database Collections

### users

```json
{
  "username": "teacher",
  "password": "teacher123",
  "role": "teacher"
}
```

```json
{
  "username": "student",
  "password": "student123",
  "role": "student"
}
```

### students

```json
{
  "username": "student",
  "attendance": "85%",
  "result": "A Grade",
  "courses": "6 Subjects",
  "timetable": "Active"
}
```

## Future Improvements

- Add new students
- Delete students
- Search students
- JWT Authentication
- Role-based authorization
- Responsive design

## Author

Aadith Siby
