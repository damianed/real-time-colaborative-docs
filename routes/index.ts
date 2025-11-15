import { Express, Request, Response } from 'express';
import {documentStore} from '../store/DocumentsStore.ts';

export function setupRoutes(app: Express): void {
  app.get("/api/documents", (_, res: Response) => {
    const docs = documentStore.getAllDocuments();
    res.json(docs);
  });

  app.get("/api/documents/:id", (req: Request, res: Response) => {
    const doc = documentStore.getDocument(req.params.id);

    if (!doc) {
      return res.status(404).json({ error: "Document not found"});
    }

    res.json(doc);
  });

  app.post("/api/documents", (_, res: Response) => {
    const doc = documentStore.createDocument();
    res.status(201).json(doc);
  });

  app.delete("/api/document/:id", (req: Request, res: Response) => {
    const deleted = documentStore.deleteDocument(req.params.id);

    if (!deleted) {
      return res.status(404).json({error: "Document not found"});
    }

    res.json({sucess: true}).send();
  });
}
