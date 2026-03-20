const templates = [
  { id: "modern", name: "Modern" },
  { id: "minimal", name: "Minimal" },
]

export default function TemplateGallery({
  selected,
  setTemplate,
}: {
  selected: string
  setTemplate: (id: string) => void
}) {
  return (
    <div className="flex gap-4">
      {templates.map((tpl) => (
        <button
          key={tpl.id}
          onClick={() => setTemplate(tpl.id)}
          className={`px-4 py-2 rounded border ${
            selected === tpl.id ? "bg-black text-white" : ""
          }`}
        >
          {tpl.name}
        </button>
      ))}
    </div>
  )
}