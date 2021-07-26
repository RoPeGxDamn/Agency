const filterBtns = document.querySelectorAll(".filter-block__item");
const productsGrid = document.querySelector(".products__grid");
const teamGrid = document.querySelector(".team__grid");
const teammateTitle = document.querySelector(".gallery__title");
const teammateDescription = document.querySelector(".gallery__text");
const socialsItems = document.querySelector(".gallery__socials .socials__item");
const profileImage = document.querySelector(".gallery__selected-photo");

const types = new Map([
  [1, "print template"],
  [2, "web template"],
  [3, "user interface"],
  [4, "mock-up"],
]);

const team = [
  {
    fullName: "Noela Back",
    imageUrl: "assets/Person1.jpg",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    vk: "https://vk.com",
    description: "Successful English teacher with more than 10 years of professional experience. Seeking a career change to a position involving copywriting for a medium to large marketing firm. Driven self-starter and fast learner who has volunteered to help teachers in various courses with their lesson-plan writing and after-school tutoring.",
    active: true,
  },
  {
    fullName: "Max Killeman",
    imageUrl: "assets/Person2.jpg",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    vk: "https://vk.com",
    description: "Highly organized and detail-oriented honors graduate from the University of Georgia seeking an entry-level position as an accountant. Served as a peer tutor for courses such as general accounting, budgeting and forecasting, and accounting principles and legislation.",
    active: false,
  },
  {
    fullName: "Bella Orgikan",
    imageUrl: "assets/Person3.jpg",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    vk: "https://vk.com",
    description: "Accomplished sales supervisor with extensive experience leading teams by example, and with feedback and coaching, seeks to expand career growth in a position as a sales manager. Contributed to new-hire training by helping the training department develop new materials that increased employee satisfaction and productivity by 30%.",
    active: false,
  },
  {
    fullName: "Oleg Mirniy",
    imageUrl: "assets/Person4.jpg",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    vk: "https://vk.com",
    description: "Friendly and professional customer service specialist with extensive experience resolving escalated customer complaints and issues. Strong interpersonal skills proven through customer satisfaction and peer recognition awards. Creative problem solver who built a new customer retention program that increased customer loyalty by 20%. Seeking a position as a customer service team supervisor to continue career growth into management.",
    active: false,
  },
];

const projects = [
  {
    imageUrl: "assets/1.jpg",
    type: types.get(1),
  },
  {
    imageUrl: "assets/2.jpg",
    type: types.get(3),
  },
  {
    imageUrl: "assets/3.jpg",
    type: types.get(2),
  },
  {
    imageUrl: "assets/4.jpg",
    type: types.get(2),
  },
  {
    imageUrl: "assets/5.jpg",
    type: types.get(4),
  },
  {
    imageUrl: "assets/6.jpg",
    type: types.get(1),
  },
  {
    imageUrl: "assets/7.jpg",
    type: types.get(4),
  },
  {
    imageUrl: "assets/8.jpg",
    type: types.get(1),
  },
];

function start() {
  Array.from(filterBtns).map((item) => {
    item.addEventListener("click", () => {
      filterPictures(item);
      Array.from(filterBtns).map(item => item.classList.remove('selected'))
      item.classList.add('selected')
    });
  });
}

function loadPictures() {
  try {
    projects.map((item) => {
      const el = document.createElement("div");
      el.style = `background-image: url(${item.imageUrl})!important`;
      el.classList.add("grid__item");
      productsGrid.prepend(el);
    });

    team.map((item) => {
      const i = document.createElement("div");
      i.style = `background-image: url(${item.imageUrl})!important`;
      i.classList.add("grid__item");
      const d = document.createElement("div");
      d.classList.add("item__description");
      d.textContent = item.fullName;
      i.append(d);
      teamGrid.append(i);
    });

    Array.from(document.querySelectorAll(".grid__item")).map((item) => {
      item.addEventListener("click", () => {
        selectTeammate(item);
      });
    });

    const obj = team.find(item => item.active == true)
    teammateTitle.textContent = obj.fullName;
    teammateDescription.textContent = obj.description;
    profileImage.style = `background-image: url(${obj.imageUrl})`;

  } catch (err) {
    console.error(err.message);
  }
}

function filterPictures(el) {
  productsGrid.innerHTML = "";
  if (el.textContent == "all") {
    projects.map((item) => {
      const el = document.createElement("div");
      el.style = `background-image: url(${item.imageUrl})`;
      el.classList.add("grid__item");
      productsGrid.prepend(el);
    });
  } else {
    projects
      .filter((i) => el.textContent == i.type)
      .map((item) => {
        const el = document.createElement("div");
        el.style = `background-image: url(${item.imageUrl})`;
        el.classList.add("grid__item");
        productsGrid.prepend(el);
      });
  }
}

function selectTeammate(item) {
  const obj = team.find((i) => i.fullName == item.textContent);
  teammateTitle.textContent = obj.fullName;
  teammateDescription.textContent = obj.description;
  profileImage.style = `background-image: url(${obj.imageUrl})`;
}

start();
loadPictures();
