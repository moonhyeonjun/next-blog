interface SkillStack {
  name: string
  level: string
  skills: Skill[]
}

interface Skill {
  name: string
  description: string
  icon: string
  level: number
}

const skillStackData: SkillStack[] = [
  {
    name: 'Frontend',
    level: 'Intermediate',
    skills: [
      {
        name: 'HTML5',
        description: 'HTML5를 사용하여 시맨틱 웹 구조를 설계하고 구현할 수 있습니다.',
        icon: '/static/images/skills/html5.png',
        level: 0.8,
      },
      {
        name: 'CSS3',
        description: 'CSS3를 활용하여 반응형 웹 디자인을 개발할 수 있습니다.',
        icon: '/static/images/skills/css3.png',
        level: 0.7,
      },
      {
        name: 'JavaScript',
        description: 'JavaScript를 이용하여 DOM을 조작하고 객체 모델을 활용할 수 있습니다.',
        icon: '/static/images/skills/javascript.png',
        level: 0.8,
      },
      {
        name: 'TypeScript',
        description:
          'TypeScript를 사용하여 JavaScript 애플리케이션의 타입 안정성을 강화할 수 있습니다.',
        icon: '/static/images/skills/typescript.png',
        level: 0.7,
      },
      {
        name: 'babel',
        description:
          'Babel을 사용하여 최신 JavaScript 코드를 이전 버전과 호환되게 컴파일할 수 있습니다.',
        icon: '/static/images/skills/babel.png',
        level: 0.5,
      },
      {
        name: 'webpack',
        description: 'webpack을 사용하여 모듈을 번들링할 수 있습니다.',
        icon: '/static/images/skills/webpack.png',
        level: 0.6,
      },
      {
        name: 'React',
        description: 'React를 사용하여 동적인 사용자 인터페이스를 구축할 수 있습니다.',
        icon: '/static/images/skills/react.png',
        level: 0.7,
      },
      {
        name: 'Next.js',
        description:
          'Next.js를 사용하여 서버 사이드 렌더링 및 정적 사이트 생성을 구현할 수 있습니다.',
        icon: '/static/images/skills/nextjs.png',
        level: 0.6,
      },
      {
        name: 'Redux',
        description:
          'Redux를 사용하여 React 애플리케이션의 상태 관리를 효율적으로 수행할 수 있습니다.',
        icon: '/static/images/skills/redux.png',
        level: 0.7,
      },
      {
        name: 'React-Query',
        description:
          'React-Query를 사용하여 React 애플리케이션의 데이터 가져오기 및 캐싱을 효율적으로 수행할 수 있습니다.',
        icon: '/static/images/skills/react-query.png',
        level: 0.6,
      },
      {
        name: 'Recoil',
        description:
          'Recoil을 사용하여 React 애플리케이션의 상태 관리를 간결하고 효율적으로 수행할 수 있습니다.',
        icon: '/static/images/skills/recoil.png',
        level: 0.7,
      },
    ],
  },
  {
    name: 'Backend',
    level: 'Beginner',
    skills: [
      {
        name: 'Node.js',
        description: 'Node.js를 사용하여 서버 사이드 로직을 개발할 수 있습니다.',
        icon: '/static/images/skills/node.png',
        level: 0.7,
      },
      {
        name: 'Express',
        description: 'Express 프레임워크를 사용하여 웹 애플리케이션을 구축할 수 있습니다.',
        icon: '/static/images/skills/express.png',
        level: 0.5,
      },
      {
        name: 'Java',
        description:
          'Java 문법을 이해하고 적용할 수 있으며, 객체 지향 프로그래밍을 학습하고 있습니다.',
        icon: '/static/images/skills/java.png',
        level: 0.4,
      },
      {
        name: 'Spring',
        description: 'Spring 프레임워크를 이용하여 RESTful 서비스를 구축할 수 있습니다.',
        icon: '/static/images/skills/spring.png',
        level: 0.3,
      },
      {
        name: 'MySQL',
        description: 'MySQL을 사용하여 관계형 데이터베이스를 설계하고 관리할 수 있습니다.',
        icon: '/static/images/skills/mysql.png',
        level: 0.6,
      },
      {
        name: 'PostgreSQL',
        description: 'PostgreSQL을 사용하여 관계형 데이터베이스를 설계하고 관리할 수 있습니다.',
        icon: '/static/images/skills/postgresql.png',
        level: 0.4,
      },
      {
        name: 'MSSQL',
        description: 'MSSQL을 사용하여 관계형 데이터베이스를 설계하고 관리할 수 있습니다.',
        icon: '/static/images/skills/mssql.png',
        level: 0.6,
      },
      {
        name: 'Sequelize',
        description:
          'Sequelize ORM을 사용하여 Node.js 애플리케이션에서 데이터베이스 작업을 수행할 수 있습니다.',
        icon: '/static/images/skills/sequelize.png',
        level: 0.6,
      },
    ],
  },
  {
    name: 'DevOps',
    level: 'Beginner',
    skills: [
      {
        name: 'git',
        description: 'git을 사용하여 코드 버전 관리 및 협업�� 수행할 수 있습니다.',
        icon: '/static/images/skills/git.png',
        level: 0.7,
      },
      {
        name: 'Docker',
        description: 'Docker를 사용하여 애플리케이션을 컨테이너화하고 배포할 수 있습니다.',
        icon: '/static/images/skills/docker.png',
        level: 0.4,
      },
      {
        name: 'Linux',
        description: 'Linux 환경에서 기본적인 시스템 관리 및 명령어 사용이 가능합니다.',
        icon: '/static/images/skills/linux.png',
        level: 0.4,
      },
    ],
  },
]

export default skillStackData
