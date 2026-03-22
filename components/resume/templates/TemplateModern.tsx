import { ResumeData } from "@/lib/types"

export default function TemplateModern({
  data,
}: {
  data: ResumeData
}) {
  return (
    <div className="bg-white p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        {data.name || "Your Name"}
      </h1>

      <p className="text-gray-500">
        {data.email || "email@example.com"}
      </p>

      <section>
        <h2 className="font-semibold">Skills</h2>
        <p>{data.skills || "Your skills here"}</p>
      </section>

      <section>
        <h2 className="font-semibold">Experience</h2>
        <p>{data.experience || "Your experience here"}</p>
      </section>
    </div>
  )
}