import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ResumeData } from "@/lib/types"

export default function EditorPanel({
  data,
  setData,
}: {
  data: ResumeData
  setData: (data: ResumeData) => void
}) {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">Edit Resume</h2>
      <Separator />

      <div>
        <Label>Name</Label>
        <Input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>

      <div>
        <Label>Email</Label>
        <Input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      <div>
        <Label>Skills</Label>
        <Textarea
          value={data.skills}
          onChange={(e) => setData({ ...data, skills: e.target.value })}
        />
      </div>

      <div>
        <Label>Experience</Label>
        <Textarea
          value={data.experience}
          onChange={(e) => setData({ ...data, experience: e.target.value })}
        />
      </div>

      <div>
        <Label>Education</Label>
        <Textarea
          value={data.education}
          onChange={(e) => setData({ ...data, education: e.target.value })}
        />
      </div>

      <div>
        <Label>Certificates</Label>
        <Textarea
          value={data.certificates}
          onChange={(e) =>
            setData({ ...data, certificates: e.target.value })
          }
        />
      </div>

    </div>
  )
}