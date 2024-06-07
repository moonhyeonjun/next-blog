import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import skillStackData from '@/data/skillStackData'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <SkillStack />
      </AuthorLayout>
    </>
  )
}

const SkillStack = () => {
  return (
    <>
      <h2>Skill Stack</h2>
      {skillStackData.map((data) => (
        <div key={data.name}>
          <h3>{data.name}</h3>
          <div className="grid grid-cols-4 gap-4">
            {data.skills.map((skill) => (
              <SkillStackCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

const SkillStackCard = ({ skill }) => {
  const getProgressColor = (level: number) => {
    if (level < 0.33) return 'bg-red-600'
    if (level < 0.67) return 'bg-yellow-600'
    return 'bg-green-600'
  }

  return (
    <div className="flex flex-col items-center">
      <Image src={skill.icon} alt={skill.name} width={74} height={74} />
      <h1 className="text-primary-font my-1.5 text-center text-lg font-bold">{skill.name}</h1>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-2.5 rounded-full ${getProgressColor(skill.level)}`}
          style={{ width: `${skill.level * 100}%` }}
        ></div>
      </div>
      <span className="w-42 mt-2 break-words text-center text-sm">{skill.description}</span>
    </div>
  )
}
