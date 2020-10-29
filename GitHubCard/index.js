/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const { default: Axios } = require("axios");

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

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:



    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
//make a array with a list of users waiting to be added to the DOM
const githubUsers = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "tylerpmatthews",
];
const cards = document.querySelector(".cards");

//Make the github card

//create card elements
function cardMaker(object) {
  const mainCard = document.createElement("div");
  const profilePicture = document.createElement("img");
  const cardInfo = document.createElement("div");
  const profileName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profileAddress = document.createElement("p");
  const followers = document.createElement("a");
  const following = document.createElement("a");
  const bio = document.createElement("p");
  const followCount = document.createElement("p");
  const followersCount = document.createElement("p");
  const hireable = document.createElement("p");
  const publicRepos = document.createElement("p");
  const accountType = document.createElement("p");
  const profileCreated = document.createElement("p");
  const profileLastSeen = document.createElement("p");

  //Set element classes
  mainCard.classList.add("card");
  cardInfo.classList.add("card-info");
  profileName.classList.add("name");
  userName.classList.add("username");

  //set attributes and content
  profilePicture.src = object.avatar_url;
  profileName.textContent = object.name;
  userName.textContent = object.login;
  location.textContent = object.location;
  profileAddress.textContent = object.url;
  followers.textContent = "Followers";
  followers.setAttribute("href", object.followers_url);
  following.textContent = "Following";
  following.setAttribute("href", object.following_url);
  bio.textContent = object.bio;
  followCount.textContent = `Followers: ${object.followers}`;
  followersCount.textContent = `Following: ${object.following}`;
  hireable.textContent = `Hireable: ${object.hireable}`;
  publicRepos.textContent = `Public Repos: ${object.public_repos}`;
  profileCreated.textContent = `Profile Created: ${object.created_at}`;
  profileLastSeen.textContent = `Last seen: ${object.updated_at}`;
  accountType.textContent = `Account type: ${object.type}`;

  //Append

  mainCard.appendChild(profilePicture);
  mainCard.appendChild(cardInfo);
  cardInfo.appendChild(profileName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(followCount);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(hireable);
  cardInfo.appendChild(publicRepos);
  cardInfo.appendChild(accountType);
  cardInfo.appendChild(profileCreated);
  cardInfo.appendChild(profileLastSeen);

  return mainCard;
}

//function that takes in an array and turns the array into a set of cards getting appended to the DOM

function linkToCard(arr) {
  arr.forEach((name) => {
    const githubName = name;
    let link = `https://api.github.com/users/${githubName}`;
    Axios.get(link)
      .then((res) => {
        const resData = res.data;
        const addCardByArray = cardMaker(resData);
        cards.appendChild(addCardByArray);
      })
      .catch((err) => {
        window.alert("Error with Axios request");
      });
  });
}
linkToCard(githubUsers);
