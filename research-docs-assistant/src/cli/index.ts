import { Command } from 'commander';
import { generateDocumentation } from '../services/generation';
import { loadTemplates } from '../services/templates';

const program = new Command();

program
  .version('0.1.0')
  .description('CLI for generating documentation for software projects');

program
  .command('generate <type> <title>')
  .description('Generate documentation of a specified type')
  .action(async (type, title) => {
    try {
      const templates = await loadTemplates();
      const documentation = await generateDocumentation(type, title, templates);
      console.log('Documentation generated successfully:', documentation);
    } catch (error) {
      console.error('Error generating documentation:', error.message);
    }
  });

program.parse(process.argv);