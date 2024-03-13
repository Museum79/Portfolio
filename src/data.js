//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/netflask.png';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/symfony.png';
import SkillImg10 from './assets/img/skills/docker.png';
import SkillImg11 from './assets/img/skills/tailwind.png';
import SkillImg12 from './assets/img/skills/spring.png';
import SkillImg13 from './assets/img/skills/java.png';




// testimonial images
import TestiImage1 from './assets/img/testimonials/poujoulat.png';
import TestiImage2 from './assets/img/testimonials/ima.png';


// navigation
export const navigation = [
  {
    name: 'Accueil',
    href: 'home',
  },
  {
    name: 'A propos',
    href: 'about',
  },
  {
    name: 'Mes travaux',
    href: 'portfolio',
  },
  {
    name: 'experiences',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Projet Netflask. Clone de la plateforme de streaming "Netflix"',
    category: 'React/Spring',
  },
  {
    id: '2',
    image: Project2,
    name: 'Site vitrine d\'astrologie pour une professionnelle',
    category: 'Html/Css',
  },
  {
    id: '3',
    image: Project3,
    name: 'Projet d\'étude d\'un site de vente aux enchères',
    category: 'React/Spring',
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React/Spring',
  },
  {
    name: 'Html/Css',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
    title: "HTML5",
  },
  {
    image: SkillImg2,
    title: "CSS3",
  },
  {
    image: SkillImg3,
    title: "JavaScript",
  },
  {
    image: SkillImg4,
    title: "ReactJs",
  },
  {
    image: SkillImg5,
    title: "NextJs",
  },
  {
    image: SkillImg6,
    title: "NodeJs",
  },
  {
    image: SkillImg7,
    title: "Git",
  },
  {
    image: SkillImg8,
    title: "Figma",
  }
];


export const skills2 = [

  {
    image: SkillImg9,
    title: "Symfony"
  },
  {
    image: SkillImg10,
    title: "Docker"
  },
  {
    image: SkillImg11,
    title: "Tailwind"
  },
  {
    image: SkillImg12,
    title: "Spring"
  },
  {
    image: SkillImg13,
    title: "Java"
  },
] 

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Stage pour le titre de "Développeur Web et Web Mobile (BAC+2)". Refonte d\'une application en React et J2E d\'un système embarqué - 2021 (8 semaines).',
    authorName: 'Cheminée Poujoulat',
    authorPosition: <a href="https://www.google.com/maps/search/chemin%C3%A9e+poujoulat/@46.2472766,-0.4677406,1373m/data=!3m1!1e3">Localiser l'entreprise</a>
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Alternance pour le titre de "Concepteur Développeur d\'Applications (BAC+4)" avec une montée en compétences sur des technologies telles que React, Spring, Docker . . . - 2022/2024.',
    authorName: 'Inter Mutuelle Assistance',
    authorPosition: <a href='https://www.google.com/maps/place/Groupe+IMA+-+Inter+Mutuelles+Assistance/@46.3260837,-0.450509,257m/data=!3m1!1e3!4m6!3m5!1s0x4807304b0ec53bd9:0x882ea244309772c3!8m2!3d46.3261317!4d-0.4506741!16s%2Fg%2F11g9qgrxj4'>Localiser l'entreprise</a>
  },

];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Envie de me contacter?',
    subtitle: 'Je suis là pour vous.',
    description: 'Envoyez moi un mail à sylvaincoulay@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Localisation actuelle',
    subtitle: 'Niort, France',
    description: <a href='https://www.google.com/maps/place/79000+Niort/@46.3230268,-0.4671869,5408m/data=!3m1!1e3!4m6!3m5!1s0x4807303211d686f5:0x405d39260e82ac0!8m2!3d46.323716!4d-0.464777!16zL20vMDJsd3Q5'>Ici.</a>,
  },
];
