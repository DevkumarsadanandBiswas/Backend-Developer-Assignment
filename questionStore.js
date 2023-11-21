// questionStore.js
module.exports = {
    initializeQuestionStore(questions) {
      const store = new Map();
  
      // Populate the question store
      questions.forEach((question, index) => {
        store.set(index + 1, question);
      });
  
      return store;
    },
  };
  