// This file serves as the entry point for the documentation principles project.
// It contains logic for processing or displaying documentation principles.

import { DocumentationPrinciple } from './documentationPrinciple';

const principles: DocumentationPrinciple[] = [
    {
        title: 'Clarity',
        description: 'Documentation should be clear and understandable to all users.',
    },
    {
        title: 'Consistency',
        description: 'Documentation must maintain a consistent style and format throughout.',
    },
    {
        title: 'Accessibility',
        description: 'Documentation should be easily accessible to all stakeholders, including those with disabilities.',
    },
    {
        title: 'Up-to-date Information',
        description: 'Documentation must be regularly updated to reflect the latest changes and practices.',
    },
    {
        title: 'Comprehensiveness',
        description: 'Documentation should cover all necessary aspects of the project, leaving no critical information out.',
    },
];

// Function to display principles
function displayPrinciples() {
    console.log('Documentation Principles:');
    principles.forEach(principle => {
        console.log(`- ${principle.title}: ${principle.description}`);
    });
}

// Execute display function
displayPrinciples();