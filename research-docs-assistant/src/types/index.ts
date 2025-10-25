// src/types/index.ts

export interface DocumentationTemplate {
    id: string;
    title: string;
    description: string;
    content: string;
}

export interface UserInput {
    title: string;
    content: string;
    templateId: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export type DocumentationType = 'tutorial' | 'how-to' | 'explanation' | 'reference' | 'faq' | 'landing';