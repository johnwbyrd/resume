import { ResumeData } from '@/utils/loadResumeData';

interface SkillsProps {
  resumeData: ResumeData;
}

export function Skills({ resumeData }: SkillsProps) {
  const { skills } = resumeData || {};

  if (!skills || skills.length === 0) return null;

  return (
    <section className="skills">
      <h2>Skills</h2>
      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            
            {skill.keywords && skill.keywords.length > 0 && (
              <ul className="skill-keywords">
                {skill.keywords.map((keyword, i) => (
                  <li key={i}>{keyword}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 