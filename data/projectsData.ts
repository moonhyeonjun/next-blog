interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AntV X6 diagram',
    description: `AntV X6 diagram is a product that has features such as creating and connecting diagrams, selecting nodes, and auto-arranging.`,
    imgSrc: '/static/images/projects/antv-x6-diagram.png',
    href: 'https://craft-n8cr.vercel.app/craft/antv-x6-diagram',
  },
  {
    title: 'React Flow diagram',
    description: `React Flow diagram is a tool that offers features such as type changes through dragging, node connection, grouping, and more.`,
    imgSrc: '/static/images/projects/reactflow-diagram.png',
    href: 'https://craft-n8cr.vercel.app/craft/reactflow-diagram',
  },
]

export default projectsData
