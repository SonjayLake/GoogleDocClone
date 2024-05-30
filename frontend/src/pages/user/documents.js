import { useEffect, useState } from 'react';
import styles from '../../app/styles/Documents.module.css';

function DocumentsPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const res = await fetch('/user/documents', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Ensure token is sent for authorization
        },
      });
      const data = await res.json();
      if (res.ok && data.documents) {
        setDocuments(data.documents);
      } else {
        console.error(data.message || 'Failed to fetch documents');
        setDocuments([]);
      }
    }

    fetchDocuments();
  }, []);

  return (
    <div className={styles.grid}>
      {documents.length > 0 ? (
        documents.map(doc => (
          <div key={doc._id} className={styles.card} onClick={() => window.location.href = `/user/UserDocument/${doc._id}`}>
            <h3>{doc.title}</h3>
            <p>{doc.description || "No description provided."}</p>
          </div>
        ))
      ) : (
        <div className={styles.card} onClick={() => window.location.href = '/user/UserDocument/'}>
          <h3>Create New Document</h3>
          <p>Click here to start a new document.</p>
        </div>
      )}
    </div>
  );
}


export default DocumentsPage;
