// questionPaperGenerator.js
module.exports = {
    generatePaper(questionStore, criteria) {
      const { totalMarks, difficultyDistribution } = criteria;
      const questionPaper = [];
      let remainingMarks = totalMarks;
  
      // Helper function to get questions based on difficulty
      function getQuestionsByDifficulty(difficulty, count) {
        const matchingQuestions = Array.from(questionStore.values()).filter(
          (question) => question.difficulty.toLowerCase() === difficulty
        );
        return matchingQuestions.slice(0, count);
      }
  
      // Generate questions based on difficulty distribution
      Object.entries(difficultyDistribution).forEach(([difficulty, percentage]) => {
        const count = Math.floor(percentage * totalMarks);
  
        const questions = getQuestionsByDifficulty(difficulty, count);
        questionPaper.push(...questions);
  
        remainingMarks -= count;
      });
  
      // Handle remaining marks (if any)
      if (remainingMarks > 0) {
        const questions = Array.from(questionStore.values()).slice(0, remainingMarks);
        questionPaper.push(...questions);
      }
  
      return questionPaper;
    },
  };
  