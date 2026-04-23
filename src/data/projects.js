const projects = [
  {
    title: 'Custom SQL Database Engine',
    description:
      'Built a C++ SQL database engine with indexing, parsing, and persistent storage.',
    bullets: [
      'Implemented B+ tree indexing for fast queries',
      'Built lexer/parser and file-based storage',
    ],
    tech: 'C++, Algorithms',
    github: 'https://github.com/FLung13/mini-sql-database',
    featured: true,
  },
  {
    title: 'Book Library Web Application',
    description:
      'Built a full-stack web app for book discovery, authentication, and dynamic content.',
    bullets: [
      'Implemented auth, search, ratings, and cart',
      'Used Django ORM and responsive UI design',
    ],
    tech: 'Django, Python',
    github: 'https://github.com/FLung13/book-exchange-app',
    featured: false,
  },
  {
    title: 'Spring Boot Web Applications',
    description:
      'Built secure web apps with MVC architecture and role-based access control.',
    bullets: [
      'Implemented controllers, services, and login flows',
      'Rendered dynamic UI with FreeMarker',
    ],
    tech: 'Java, Spring Boot',
    github: '',
    featured: false,
  },
]

export default projects