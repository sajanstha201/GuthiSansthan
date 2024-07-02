import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import core styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Import default layout styles
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
const MyPdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="/sagar_shrestha_Resume (1).pdf" // Ensure this path is correct
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default MyPdfViewer;
