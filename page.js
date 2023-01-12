// get access to the mobile menu elements

const mobileMenu = document.querySelector('.mobile-menu');
const hambugerMenu = document.querySelector('.navbar-mobile');
const closeButton = document.querySelector('.close-button');
const navItem = document.querySelectorAll('#nav-item');
const moreButton = document.querySelector('.more');

hambugerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navItem.forEach((list) => {
  list.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// featured speakers

const featuredSpeakers = document.querySelector('.featured-speakers');

// array data
const speakers = [
  {
    featuredImage: 'fsimages/Ire-Aderinokun.webp',
    Name: 'Ire Aderinokun',
    description: 'A frontend developer and user interface designer from Lagos, Nigeria. She is the Cofounder, COO, and VP Engineering of Helicarrier.',
    information: 'Ire is a self-taught frontend developer and user interface designer. She built her first website at the age of 13 as a fansite for Neopets where she had learned her first basic HTML codes. Ire is a Google Developer Expert, specializing in the core front-end technologies HTML, CSS, and JavaScript. Ire is also an author at techcabal.',
    detailed: 'https://www.linkedin.com/in/iaderinokun/?originalSubdomain=uk',
  },
  {
    featuredImage: 'fsimages/Jamila-Abass-img.jpeg',
    Name: 'Jamila Abass',
    description: 'Jamila Abbas, is a computer scientist, software engineer, businesswoman and entrepreneur in Kenya.',
    information: 'She is the co-founder and chief executive officer of MFarm Kenya Limited, an internet-based organisation that helps farmers find the best farm implements, seeds, access to weather reports and market information.',
    detailed: 'https://www.linkedin.com/in/jamilaabass/?originalSubdomain=ke',
  },
  {
    featuredImage: 'fsimages/Rana-el-Kaliouby-img.jpg',
    Name: 'Rana el Kaliouby',
    description: 'Rana el Kaliouby is an Egyptian-American computer scientist and entrepreneur.',
    information: 'She specializes in the field of expression recognition research and technology development, which is a subset of facial recognition designed to identify the emotions expressed by the face',
    detailed: 'https://www.linkedin.com/in/kaliouby/',
  },
  {
    featuredImage: 'fsimages/emeagwali-img.jpeg',
    Name: 'Philip Emeagwali',
    description: 'A Nigerian computer scientist.studied for a Ph.D. degree from the University of Michigan from 1987 through 1991.',
    information: 'He won the 1989 Gordon Bell Prize for price-performance in high-performance computing applications, in an oil reservoir modeling calculation using a novel mathematical formulation and implementation.',
    More: 'https://www.linkedin.com/in/emeagwali',
  },
  {
    featuredImage: 'fsimages/Prof-Omari.jpeg',
    Name: 'Prof Omar Fakih',
    description: 'Associate Professor of Computer and Telecommunications Engineering at the Engineering Faculty, Zanzibar University in Tanzania.',
    information: 'Graduated PhD in Computer Engineering from Chonnam National University, South Korea. In 2000, he graduated Master of Engineering in Electronics and Communications specialized in Microwave from Birla Institute of Technology, India, where he also graduated his Bachelor of Electronics and Communications Engineering in July 1998.',
    detailed: 'https://www.linkedin.com/in/omar-fakih-hamad-7b45844/?originalSubdomain=za',
  },
  {
    featuredImage: 'fsimages/Tshilidzi-Marwala-img.jpeg',
    Name: 'Prof Tshilidzi Marwala',
    description: 'Vice-Chancellor and Principal of the University of Johannesburg, beginning January 2018.',
    information: 'Tshilidzi Marwala is a South African artificial intelligence engineer, a computer scientist, a mechanical engineer and a university administrator.',
    detailed: 'https://www.linkedin.com/in/tshilidzimarwala/?originalSubdomain=za',
  },
];

// Render featured speakers data
speakers.forEach((speaker) => {
  const featured = `<div class="feature">
    <div class="speaker-image">
      <img src="${speaker.featuredImage}" width="800"
      height="220" alt="speaker image"
      
      >
    </div>
    <div class="speaker-details">
      <h4>${speaker.Name}</h4>
      <p class="description">${speaker.description}</p>
      <p class=info>${speaker.information}</p>
      <a target="_blank" class="detailed" href="${speaker.detailed}">More info</a>
    </div>
  </div>`;
  featuredSpeakers.innerHTML += featured;
});

// more speakers on clicking the more button in mobile

const eachSpeaker = document.querySelectorAll('.feature');
moreButton.addEventListener('click', () => {
  eachSpeaker.forEach((speaker) => {
    speaker.style.display = 'flex';
  });
});
