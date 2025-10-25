import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Research Documentation Assistant</h1>
            <p>
                This application assists software developers, particularly in the open-source community, in writing effective documentation for their projects.
            </p>
            <h2>Documentation Styles</h2>
            <ul>
                <li>
                    <Link to="/tutorial">Tutorials</Link>: Step-by-step guides to help users understand specific features or workflows.
                </li>
                <li>
                    <Link to="/howto">How-To Guides</Link>: Practical instructions for accomplishing specific tasks.
                </li>
                <li>
                    <Link to="/explanation">Explanations</Link>: Detailed descriptions of concepts and functionalities.
                </li>
                <li>
                    <Link to="/reference">References</Link>: Comprehensive information about APIs, libraries, or tools.
                </li>
                <li>
                    <Link to="/faq">Troubleshooting/FAQs</Link>: Answers to common questions and solutions to frequent issues.
                </li>
            </ul>
            <h2>Get Started</h2>
            <p>
                Choose a documentation style from the list above to begin creating your documentation.
            </p>
        </div>
    );
};

export default IndexPage;