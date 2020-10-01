

import axios from 'axios';
const cardSection = document.querySelector('.cards')


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/tylerpmatthews

*/
axios.get('https://api.github.com/users/tylerpmatthews')
.then(res=>{
  console.log('Future data',res)
  console.log('repsonse',res.data)
})
.catch(function(error){
  console.log(error)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

 axios.get('https://api.github.com/users/tylerpmatthews')

 .then(res=>{
  const cardSection = document.querySelector('.cards')
   const object = res.data
   const card = cardMaker(object)
   cardSection.append(card)
 })
 

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [tetondandustinmyersjustsmlluishrdbigknell];


  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:
    

  //   <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>

  function cardMaker(object){
   
    const cardSection = document.createElement('div')
    cardSection.classList.add('card')

    const cardImg = document.createElement('img')
    cardImg.setAttribute('src',object.avatar_url)
    cardImg.appendChild(cardSection)

    const cardInfo = document.createElement('div')
    cardInfo.appendChild(cardSection)

    const cardName = document.createElement('h3')
    cardName.classList.add('name')
    cardName.appendChild(cardInfo)

    const userName = document.createElement('p')
    userName.appendChild(cardInfo)

    const location = document.createElement('p')
    location.appendChild(cardInfo)

    const followers = document.createElement('p')
    followers.appendChild(cardInfo)

    const following = document.createElement('p')
    following.appendChild(cardInfo)

    const bio = document.createElement('p')
    bio.appendChild(cardInfo)
    
    return cardSection

  }



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
