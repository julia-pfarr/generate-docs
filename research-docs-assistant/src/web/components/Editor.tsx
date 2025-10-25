import React, { useState } from 'react';

const Editor: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    return (
        <div className="editor-container">
            <h2>Documentation Editor</h2>
            <textarea
                value={content}
                onChange={handleChange}
                placeholder="Start writing your documentation here..."
                rows={10}
                cols={50}
                className="editor-textarea"
            />
            <div className="editor-preview">
                <h3>Preview</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default Editor;