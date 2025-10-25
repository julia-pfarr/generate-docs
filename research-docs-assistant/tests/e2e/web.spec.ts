import { Selector } from 'testcafe';

fixture `Research Docs Assistant`
    .page `http://localhost:3000`; // Adjust the URL as needed for your local setup

test('Landing page loads correctly', async t => {
    const landingPageTitle = Selector('h1'); // Adjust selector based on your actual HTML structure

    await t
        .expect(landingPageTitle.innerText).eql('Welcome to Research Docs Assistant') // Adjust expected text
        .expect(Selector('nav').exists).ok('Navigation menu should be present')
        .expect(Selector('footer').exists).ok('Footer should be present');
});

test('Editor component is functional', async t => {
    const editorInput = Selector('.editor'); // Adjust selector based on your actual HTML structure
    const sampleText = 'This is a sample documentation text.';

    await t
        .typeText(editorInput, sampleText)
        .expect(editorInput.value).eql(sampleText, 'Editor should accept input text');
});

test('Template selection works', async t => {
    const templateSelector = Selector('.template-selector'); // Adjust selector based on your actual HTML structure
    const tutorialOption = templateSelector.find('option').withText('Tutorial'); // Adjust based on your actual options

    await t
        .click(templateSelector)
        .click(tutorialOption)
        .expect(templateSelector.value).eql('tutorial', 'Template selector should change to Tutorial');
});

test('FAQ section is accessible', async t => {
    const faqLink = Selector('a').withText('FAQs'); // Adjust selector based on your actual HTML structure

    await t
        .click(faqLink)
        .expect(Selector('h2').innerText).eql('Frequently Asked Questions', 'FAQ section should load');
});