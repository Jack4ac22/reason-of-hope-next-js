export function randomArticlesFromArray(articlesList = [], number = 1) {
  const randomArticles = [];
  while (randomArticles.length < number) {
    const randomIndex = Math.floor(Math.random() * articlesList.length);
    randomArticles.push(articlesList[randomIndex]);
  }
  return randomArticles;
}
