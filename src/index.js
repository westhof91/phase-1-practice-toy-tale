let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style .display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then( function (toys) {
      renderToys(toys)
    })
function renderToys(toys) {
const toyCollection = document.getElementById('toy-collection')

toys.forEach(element => {
  console.log(element)


  let card = document.createElement('div')
  card.className = 'card'
 
  let toyName = document.createElement('h2') 
  toyName.innerText = element.name
  card.append(toyName)


  let toyAvatar = document.createElement('img')
  toyAvatar.src = element.image
  toyAvatar.setAttribute('class', 'toy-avatar')
  card.append(toyAvatar)
  toyCollection.append(card)

  let toyLikes = document.createElement('p')
  toyLikes = element.likes
  card.append(toyLikes)

  let likeButtn = document.createElement('button')
  likeButtn.id = element.id 
  likeButtn.innerText = 'like'
  likeButtn.className = 'like-btn'
  card.append(likeButtn)
})


   
}

});


