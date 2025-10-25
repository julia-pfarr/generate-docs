import React from 'react';

const templates = [
    { id: 'tutorial', name: 'Tutorial' },
    { id: 'howto', name: 'How-To Guide' },
    { id: 'explanation', name: 'Explanation' },
    { id: 'reference', name: 'Reference' },
    { id: 'faq', name: 'Troubleshooting/FAQs' },
    { id: 'landing', name: 'Landing Page' },
];

const TemplateSelector = ({ onTemplateSelect }) => {
    const handleChange = (event) => {
        const selectedTemplate = event.target.value;
        onTemplateSelect(selectedTemplate);
    };

    return (
        <div>
            <label htmlFor="template-selector">Select Documentation Template:</label>
            <select id="template-selector" onChange={handleChange}>
                <option value="">--Choose a template--</option>
                {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                        {template.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TemplateSelector;