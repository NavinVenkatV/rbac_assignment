# Blog Management System

A full-stack blog management system where **users** can view blog posts, and **admins** have the ability to create, delete, and manage blogs. The application incorporates secure authentication and uses various modern technologies to provide a clean and scalable experience.

## Features
- **User View**: Users can browse and read blog posts.
- **Admin Control**: Admins can create, delete, and manage blogs.
- **JWT Authentication**: Secure JWT-based authentication ensures only admins can perform CRUD operations.
- **Image Handling**: Blog images are uploaded via **Multer** and stored on **AWS S3** for scalability and efficient retrieval.
- **Password Security**: User passwords are securely hashed using **bcrypt**.

## Tech Stack
- **Frontend:** React, Tailwind CSS (Responsive and clean UI)
- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Prisma ORM
- **Authentication:** JWT (JSON Web Tokens)
- **File Handling:** Multer (for file uploads)
- **Cloud Storage:** AWS S3 (for storing blog images)
- **Password Hashing:** bcrypt

## Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- npm or yarn
- PostgreSQL
