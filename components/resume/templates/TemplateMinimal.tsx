import { ResumeData } from "@/lib/types"

export default function TemplateMinimal({ data }: { data: ResumeData }) {
  return (
    <div className="bg-white max-w-[816px] min-h-[1056px] mx-auto p-10 text-gray-800 font-sans leading-relaxed">
      
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          {data.name}
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          {data.address}
        </p>

        <div className="text-sm text-gray-500 mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.linkedin}</span>
          <span>{data.portfolio}</span>
          <span>{data.github}</span>
        </div>
      </header>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 my-6" />

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="section-title">Summary</h2>
        <p className="text-sm text-gray-700">
          {data.summary}
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-6">
        <h2 className="section-title">Skills</h2>
        <p className="text-sm text-gray-700">
          {data.skills}
        </p>
      </section>

      {/* EXPERIENCE & PROJECTS */}
      <section className="mb-6">
        <h2 className="font-semibold">Experience</h2>

        {data.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between font-medium">
              <span>{exp.company}</span>
              <span>{exp.duration}</span>
            </div>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="mb-6">
        <h2 className="font-semibold">Education</h2>

        {data.education.map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between font-medium">
              <span>{edu.school}</span>
              <span>{edu.duration}</span>
            </div>
            <p>{edu.degree}</p>
            <p className="text-sm text-gray-600">{edu.info}</p>
          </div>
        ))}

      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2 className="font-semibold">Certificates</h2>

        <ul className="list-disc ml-5">
          {data.certificates.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}