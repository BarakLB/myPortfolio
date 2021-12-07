'use strict'
var gProjects;

function createProj(id, name, title, url) {
  var desc = `
Lorem, ipsum dolor
 sit amet consectetur adipisicing elit. Deserunt quidem sint necessitatibus explicabo
  tenetur soluta laudantium placeat aperiam totam doloremque! Accusamus et eius totam
   debitis alias nobis, provident accusantium animi?
`

  return {
    id,
    name,
    title,
    desc,
    url,
    publishAt: new Date(),
    labels: ["Matrixes", "keyboard events"],
  }
}

function createProjects() {
  var projects = []
  projects.push(createProj('MineSweeper', 'Minesweeper', 'JS Game', 'img/portfolio/minesweeper.jpg'))
  projects.push(createProj('book-shop', 'Bookshop', 'Buy Books Here', 'img/portfolio/bookshop.jpg'))
  projects.push(createProj('pacman', 'Pacman', 'JS Game', 'img/portfolio/pacman.jpg'))
  projects.push(createProj('todo-mvc', 'Todo-MVC', 'Little JS Project', 'img/portfolio/todo-mvc.jpg'))
  projects.push(createProj('GuessMe-Ex', 'Guesswho', 'JS Game', 'img/portfolio/guesswho.jpg'))
  projects.push(createProj('card-game', 'Card-game', 'JS Game', 'img/portfolio/card-game.jpg'))
  return projects
}

function findProject(id) {
  return gProjects.find((project) => {
    return project.id === id;
  });
}
