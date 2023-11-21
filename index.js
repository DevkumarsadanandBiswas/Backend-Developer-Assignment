// index.js
const { loadSampleData, generateQuestionPaper } = require('./utils');
const { initializeQuestionStore } = require('./questionStore');
const { generatePaper } = require('./questionPaperGenerator');

// Load sample data
const questions = loadSampleData('sampleData.json');

// Initialize question store
const questionStore = initializeQuestionStore(questions);

// Generate question paper with specified criteria
const criteria = {
  totalMarks: 100,
  difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
};

const questionPaper = generatePaper(questionStore, criteria);

// Display the generated question paper
console.log('Generated Question Paper:');
console.log(questionPaper);
