# Notes App

A full-stack note-taking application built with React (TypeScript) for the frontend and Node.js/Express for the backend, using PostgreSQL as the database.

## Features

- Create, read, update, and delete notes
- Responsive design that works on both desktop and mobile
- Real-time form validation
- Persistent data storage using PostgreSQL
- RESTful API backend

## Tech Stack

### Frontend
- React with TypeScript
- CSS for styling (mobile-first approach)

### Backend
- Node.js
- Express
- TypeScript
- Prisma (ORM)
- PostgreSQL (via ElephantSQL)

## Prerequisites

- Node.js (v18.18 or higher)
- PostgreSQL database (ElephantSQL account or local installation)
- npm or yarn

## Installation

### Backend Setup

1. Clone the repository and navigate to the server directory:
```bash
cd notes-app/notes-app-server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory and add your database URL:
```
DATABASE_URL="your-elephantsql-url"
```

4. Initialize Prisma and push the database schema:
```bash
npx prisma init
npx prisma db push
```

5. Start the server:
```bash
npm start
```

The server will run on `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd notes-app/notes-app-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## API Endpoints

- `GET /api/notes` - Retrieve all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## Database Schema

```prisma
model Note {
  id      Int      @id @default(autoincrement())
  title   String
  content String
}
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Tutorial source: [Code Coyotes]
- Prisma documentation
- React TypeScript documentation
- ElephantSQL for database hosting
