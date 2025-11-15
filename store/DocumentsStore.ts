import {v4 as uuidv4} from 'uuid';
import {Document} from '../types/index.ts';

class DocumentStore {
  private documents: Map<string, Document> = new Map();

  createDocument(title: string = "New Document", initialContent: string = ''): Document {
    const doc: Document = {
      id:  uuidv4(),
      title,
      content: initialContent,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.documents.set(doc.id, doc);
    return doc;
  }

  getDocument(id: string): Document | undefined {
    return this.documents.get(id);
  }

  getAllDocuments(): Document[] {
    return Array.from(this.documents.values());
  }

  updateDocumentContent(id: string, newContent: string): Document | undefined {
    const doc = this.documents.get(id);
    if (!doc) return undefined;

    doc.content = newContent
    this.documents.set(id, doc);
  }

  deleteDocument(id: string): boolean {
    const doc = this.documents.get(id)
    if (!doc) return false;

    return this.documents.delete(id);
  }
}

export const documentStore = new DocumentStore();
