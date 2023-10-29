function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

export function randomArticlesFromArray(articlesList = [], number = 1) {
  let randomArticles = [];
  while (randomArticles.length < number) {
    const randomIndex = Math.floor(Math.random() * articlesList.length);
    randomArticles.push(articlesList[randomIndex]);
    randomArticles = randomArticles.filter(onlyUnique);
  }
  return randomArticles;
}
