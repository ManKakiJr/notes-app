import express, { Request, Response, Application } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Get all notes
app.get("/api/notes", async (req: Request, res: Response): Promise<void> => {
    try {
        const notes = await prisma.note.findMany();
        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ error: "Failed to fetch notes" });
    }
});

// Create a new note
app.post("/api/notes", async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            res.status(400).json({
                error: "Title and content fields are required"
            });
            return;
        }

        const note = await prisma.note.create({
            data: { title, content }
        });

        res.status(201).json(note);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ error: "Failed to create note" });
    }
});

app.put("/api/notes/:id", async (req: Request, res: Response): Promise<void> => {
    const { title, content } = req.body;
    const id = parseInt(req.params.id);


    if (!title || !content) {
        res.status(400).json({
            error: "Title and content fields are required"
        });
        return;
    }

    if (!id || isNaN(id)) {
        res.status(400).send("ID must be a valid number");
        return;
    }

    try {
        const updateNote =
            await prisma.note.update({
                where: { id },
                data: { title, content }
            })
        res.json(updateNote);
    } catch (error) {
        res.status(500).send("Oopps something went wrong");
    }
});

app.delete("/api/notes/:id", async (req: Request, res: Response): Promise<void> => {
    const { title, content } = req.body;
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        res.status(400).send("ID must be a valid number");
        return;
    }

    try {
        const updateNote =
            await prisma.note.delete({
                where: { id },
            })
        res.status(204).send();
    } catch (error) {
        res.status(500).send("Oopps something went wrong");
    }
});

process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

app.listen(8000, () => {
    console.log("Server running on localhost:8000");
});