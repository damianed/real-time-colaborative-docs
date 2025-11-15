import express from 'express';
import {documentStore} from './store/DocumentsStore.ts';

const app = express();
const port = 3000;

app.get("/api/documents", (_, res) => {
  const docs = documentStore.getAllDocuments();
  res.json(docs);
});

app.get("/api/documents/:id", (req, res) => {
  const doc = documentStore.getDocument(req.params.id);

  if (!doc) {
    return res.status(404).json({ error: "Document not found"});
  }

  res.json(doc);
});

app.post("/api/documents", (_, res) => {
  const doc = documentStore.createDocument();
  res.status(201).json(doc);
});

app.listen(port, () => {
  console.log(`Example app listen on port ${port}!`);
});
