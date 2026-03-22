import TemplateModern from "./templates/TemplateModern"
import TemplateMinimal from "./templates/TemplateMinimal"
import { ResumeData } from "@/lib/types"

type TemplateComponent = React.FC<{ data: ResumeData }>

const templateMap: Record<string, TemplateComponent> = {
  modern: TemplateModern,
  minimal: TemplateMinimal,
}

export default function PreviewPanel({
  data,
  template,
  resumeRef,
}: {
  data: ResumeData
  template: string
  resumeRef: React.RefObject<HTMLDivElement | null>
  
}) {
  const Component = templateMap[template] || TemplateModern

  return (
    <div className="flex justify-center">
      <div ref={resumeRef} className="w-[816px] min-h-[1056px] overflow-hidden bg-white shadow p-6">
        <Component data={data} />
      </div>
    </div>
  )
}