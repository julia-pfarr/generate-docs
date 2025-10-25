import { generateDocumentation } from '../../src/services/generation';
import { templates } from '../../src/services/templates';

describe('Documentation Generation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should generate a tutorial documentation correctly', () => {
        const input = {
            title: 'How to Use the Application',
            content: 'This is a tutorial on how to use the application.',
            template: 'tutorial'
        };
        const expectedOutput = templates.tutorial.replace('{{title}}', input.title).replace('{{content}}', input.content);
        
        const result = generateDocumentation(input);
        
        expect(result).toEqual(expectedOutput);
    });

    it('should generate a how-to guide documentation correctly', () => {
        const input = {
            title: 'Setting Up the Environment',
            content: 'Follow these steps to set up the environment.',
            template: 'howto'
        };
        const expectedOutput = templates.howto.replace('{{title}}', input.title).replace('{{content}}', input.content);
        
        const result = generateDocumentation(input);
        
        expect(result).toEqual(expectedOutput);
    });

    it('should generate an explanation documentation correctly', () => {
        const input = {
            title: 'Understanding the Architecture',
            content: 'This section explains the architecture of the application.',
            template: 'explanation'
        };
        const expectedOutput = templates.explanation.replace('{{title}}', input.title).replace('{{content}}', input.content);
        
        const result = generateDocumentation(input);
        
        expect(result).toEqual(expectedOutput);
    });

    it('should generate reference documentation correctly', () => {
        const input = {
            title: 'API Reference',
            content: 'This section provides an API reference.',
            template: 'reference'
        };
        const expectedOutput = templates.reference.replace('{{title}}', input.title).replace('{{content}}', input.content);
        
        const result = generateDocumentation(input);
        
        expect(result).toEqual(expectedOutput);
    });

    it('should generate FAQ documentation correctly', () => {
        const input = {
            title: 'Frequently Asked Questions',
            content: 'This section answers common questions.',
            template: 'faq'
        };
        const expectedOutput = templates.faq.replace('{{title}}', input.title).replace('{{content}}', input.content);
        
        const result = generateDocumentation(input);
        
        expect(result).toEqual(expectedOutput);
    });

    it('should throw an error for unsupported templates', () => {
        const input = {
            title: 'Unsupported Template',
            content: 'This template is not supported.',
            template: 'unsupported'
        };
        
        expect(() => generateDocumentation(input)).toThrow('Template not supported');
    });
});