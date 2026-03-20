import TemplateModern from "./templates/TemplateModern"
import TemplateMinimal from "./templates/TemplateMinimal"
import { ResumeData } from "@/lib/types"

const templateMap: { [key: string]: React.ComponentType<{ data: ResumeData }> } = {
  modern: TemplateModern,
  minimal: TemplateMinimal,
}

export default function PreviewPanel({
  data,
  template,
}: {
  data: ResumeData
  template: string
}) {
  const Component = templateMap[template] || TemplateModern

  return (
    <div className="flex justify-center">
      <div className="w-[794px] min-h-[1123px] bg-white shadow p-6">
        <Component data={data} />
      </div>
    </div>
  )
}