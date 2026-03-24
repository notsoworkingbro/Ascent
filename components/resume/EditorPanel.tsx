import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ResumeData } from "@/lib/types"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EditorPanel({
  data,
  setData,
  template,
  setTemplate,
}: {
  data: ResumeData
  setData: (data: ResumeData) => void
  template: string
  setTemplate: (value: string) => void
}) {
  return (
    <div className="space-y-6">

      <h2 className="text-xl font-bold">Edit Resume</h2>
      <Separator />

      {/* TEMPLATE */}
      <div className="space-y-2">
        <Label>Choose Template</Label>
        <Select value={template} onValueChange={setTemplate}>
          <SelectTrigger>
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="modern">Modern</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* PERSONAL INFO */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">
          Personal Information
        </h3>

        <div>
          <Label>Name</Label>
          <Input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div>
          <Label>Address</Label>
          <Input
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
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
          <Label>Phone</Label>
          <Input
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>

      <Separator />

      {/* LINKS */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">
          Links
        </h3>

        <div>
          <Label>LinkedIn</Label>
          <Input
            value={data.linkedin}
            onChange={(e) => setData({ ...data, linkedin: e.target.value })}
          />
        </div>

        <div>
          <Label>Portfolio</Label>
          <Input
            value={data.portfolio}
            onChange={(e) => setData({ ...data, portfolio: e.target.value })}
          />
        </div>

        <div>
          <Label>GitHub</Label>
          <Input
            value={data.github}
            onChange={(e) => setData({ ...data, github: e.target.value })}
          />
        </div>
      </div>

      <Separator />

      {/* SUMMARY */}
      <div>
        <Label>Summary</Label>
        <Textarea
          value={data.summary}
          onChange={(e) => setData({ ...data, summary: e.target.value })}
        />
      </div>

      {/* SKILLS */}
      <div>
        <Label>Skills</Label>

        {data.skills.map((skill, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <Input
              placeholder="Enter skill"
              value={skill}
              onChange={(e) => {
                const updated = [...data.skills]
                updated[index] = e.target.value
                setData({ ...data, skills: updated })
              }}
            />

            <button
              onClick={() => {
                const updated = data.skills.filter((_, i) => i !== index)
                setData({ ...data, skills: updated })
              }}
              className="px-2 bg-red-500 text-white rounded"
            >
              Trushhhh
            </button>
          </div>
        ))}

        <button
          onClick={() =>
            setData({
              ...data,
              skills: [...data.skills, ""],
            })
          }
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Add Skill
        </button>
      </div>

      {/* EXPERIENCE */}
      <div>
        <Label>Experience</Label>

        {data.experience.map((exp, index) => (
          <div key={index} className="space-y-2 border p-3 rounded mb-3">

            <Input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => {
                const updated = [...data.experience]
                updated[index].company = e.target.value
                setData({ ...data, experience: updated })
              }}
            />

            <Input
              placeholder="Month Year - Month Year"
              value={exp.duration}
              onChange={(e) => {
                const updated = [...data.experience]
                updated[index].duration = e.target.value
                setData({ ...data, experience: updated })
              }}
            />

            <Textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => {
                const updated = [...data.experience]
                updated[index].description = e.target.value
                setData({ ...data, experience: updated })
              }}
            />
          </div>
        ))}

        <button
          onClick={() =>
            setData({
              ...data,
              experience: [
                ...data.experience,
                { company: "", duration: "", description: "" },
              ],
            })
          }
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Add Experience
        </button>
      </div>        

      {/* EDUCATION */}
      <div>
        <Label>Education</Label>

        {data.education.map((edu, index) => (
          <div key={index} className="space-y-2 border p-3 rounded mb-3">

            <Input
              placeholder="School"
              value={edu.school}
              onChange={(e) => {
                const updated = [...data.education]
                updated[index].school = e.target.value
                setData({ ...data, education: updated })
              }}
            />

            <Input
              placeholder="Month Year - Month Year"
              value={edu.duration}
              onChange={(e) => {
                const updated = [...data.education]
                updated[index].duration = e.target.value
                setData({ ...data, education: updated })
              }}
            />

            <Input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => {
                const updated = [...data.education]
                updated[index].degree = e.target.value
                setData({ ...data, education: updated })
              }}
            />

            <Textarea
              placeholder="Additional Info"
              value={edu.info}
              onChange={(e) => {
                const updated = [...data.education]
                updated[index].info = e.target.value
                setData({ ...data, education: updated })
              }}
            />
          </div>
        ))}

        <button
          onClick={() =>
            setData({
              ...data,
              education: [
                ...data.education,
                { school: "", duration: "", degree: "", info: "" },
              ],
            })
          }
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Add Education
        </button>
      </div>

      {/* CERTIFICATIONS */}
      <div>
        <Label>Certificates</Label>

        {data.certificates.map((cert, index) => (
          <Input
            key={index}
            className="mb-2"
            placeholder="Certificate name"
            value={cert}
            onChange={(e) => {
              const updated = [...data.certificates]
              updated[index] = e.target.value
              setData({ ...data, certificates: updated })
            }}
          />
        ))}

        <button
          onClick={() =>
            setData({
              ...data,
              certificates: [...data.certificates, ""],
            })
          }
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Add Certificate
        </button>
      </div>

    </div>
  )
}