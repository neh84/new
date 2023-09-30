import React, { useState } from 'react';

function App() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [documentDetails, setDocumentDetails] = useState({});
    const [draftedDocument, setDraftedDocument] = useState('');
    const [reference, setReference] = useState('');

    const handleAsk = async () => {
        const aiResponse = await fetch('/ask', {
            method: 'POST',
            body: JSON.stringify({ question }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        setResponse(aiResponse);
    };

    const handleDraftDocument = async () => {
        const document = await fetch('/draft_document', {
            method: 'POST',
            body: JSON.stringify(documentDetails),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        setDraftedDocument(document);
    };

    const handleGetReference = async (topic) => {
        const ref = await fetch('/get_reference', {
            method: 'POST',
            body: JSON.stringify({ topic }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        setReference(ref);
    };

    return (
        <div>
            <h1>Legal Assistant AI</h1>
            <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask a question"></textarea>
            <button onClick={handleAsk}>Ask</button>
            {response && <div>AI Response: {response}</div>}

            {/* Document drafting section */}
            <h2>Draft Document</h2>
            <textarea value={documentDetails.description} onChange={e => setDocumentDetails(prev => ({ ...prev, description: e.target.value }))} placeholder="Describe the incident"></textarea>
            <button onClick={handleDraftDocument}>Draft</button>
            {draftedDocument && <div>Drafted Document: {draftedDocument}</div>}

            {/* Legal reference section */}
            <h2>Get Legal Reference</h2>
            <button onClick={() => handleGetReference("car accident")}>Car Accident</button>
            <button onClick={() => handleGetReference("personal injury")}>Personal Injury</button>
            {reference && <div>Reference: {reference}</div>}
        </div>
    );
}

export default App;
