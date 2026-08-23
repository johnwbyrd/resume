import { ResumeData } from '@/utils/loadResumeData';

interface SkillsProps {
  resumeData: ResumeData;
}

export function Skills({ resumeData }: SkillsProps) {
  const highlights = resumeData?.basics?.highlights;

  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}
