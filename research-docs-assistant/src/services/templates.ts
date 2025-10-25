export const templates = {
    tutorial: `
# Tutorial Title

## Introduction
Provide a brief introduction to the tutorial topic.

## Prerequisites
List any prerequisites or knowledge required to follow this tutorial.

## Steps
1. Step one description.
2. Step two description.
3. Step three description.

## Conclusion
Summarize what the user has learned and any next steps.
    `.trim(),

    howto: `
# How to [Task]

## Overview
Provide a brief overview of the task and its importance.

## Steps
1. Step one description.
2. Step two description.
3. Step three description.

## Additional Resources
Link to any additional resources or documentation.
    `.trim(),

    explanation: `
# Explanation of [Concept]

## What is [Concept]?
Provide a detailed explanation of the concept.

## Why is it Important?
Discuss the significance of the concept in the context of software development.

## Key Points
- Point one
- Point two
- Point three
    `.trim(),

    reference: `
# Reference for [Topic]

## Overview
Provide a brief overview of the topic.

## Key Terms
- Term one: Definition
- Term two: Definition
- Term three: Definition

## Additional Information
Link to further reading or related topics.
    `.trim(),

    faq: `
# Frequently Asked Questions

## Question 1
Provide an answer to the first frequently asked question.

## Question 2
Provide an answer to the second frequently asked question.

## Question 3
Provide an answer to the third frequently asked question.
    `.trim(),

    landing: `
# Welcome to the Research Docs Assistant

## Overview
This application assists software developers, particularly in open source research contexts, in creating various styles of documentation.

## Documentation Styles
- Tutorials
- How-to Guides
- Explanations
- References
- Troubleshooting/FAQs

## Motivation
Effective documentation is crucial for software development. This tool aims to streamline the process and enhance the quality of documentation produced by developers.
    `.trim(),
};