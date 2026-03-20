import { ResumeData } from "@/lib/types"

export default function TemplateMinimal({ data }: { data: ResumeData }) {
  return (
    <div className="bg-white p-8">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <p className="text-sm">{data.email}</p>

      <hr className="my-4" />

      <p><strong>Skills:</strong> {data.skills}</p>
      <p><strong>Experience:</strong> {data.experience}</p>
      <p><strong>Education:</strong> {data.education}</p>
    </div>
  )
}