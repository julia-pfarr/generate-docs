import express from 'express';
import { generateDocumentation } from '../../services/generation';
import { getTemplates } from '../../services/templates';

const router = express.Router();

// Route to create documentation
router.post('/generate', async (req, res) => {
    try {
        const { templateType, content } = req.body;
        const documentation = await generateDocumentation(templateType, content);
        res.status(201).json({ documentation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to retrieve available templates
router.get('/templates', async (req, res) => {
    try {
        const templates = await getTemplates();
        res.status(200).json({ templates });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;