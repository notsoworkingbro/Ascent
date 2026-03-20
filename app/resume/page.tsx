"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import type {ResumeData} from "@/lib/types"

import EditorPanel from "@/components/resume/EditorPanel"


import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"


export default function ResumePage() {
  const [template, setTemplate] = useState("modern")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [skills, setSkills] = useState("")
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [certificates, setCertificates] = useState("")

  const [data, setData] = useState<ResumeData>({
    name: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
    certificates: "",
  })

  const resumeRef = useRef<HTMLDivElement | null>(null)

  const downloadPDF = async () => {
    if (!resumeRef.current) return

    const canvas = await html2canvas(resumeRef.current)

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    })

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
    pdf.save("resume.pdf")
  }

  return (
    <div className="p-8 grid md:grid-cols-2 gap-10">

      {/* FORM */}
      <div className="w-1/3 border-r p-6 overflow-y-auto">
        <EditorPanel data={data} setData={setData} />
      </div>

      {/* RESUME PREVIEW */}

      <div 
        ref={resumeRef}
        className="bg-white border rounded-lg p-8 shadow-sm space-y-6">

        <div>
          <h2 className="text-2xl font-bold">
            {name || "Your Name"}
          </h2>

          <p className="text-muted-foreground">
            {email || "email@example.com"}
          </p>

          <p className="text-muted-foreground">
            {phone || "123-456-7890"}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">Skills</h3>
          <p className="text-sm leading-relaxed">
            {skills || "Your skills will appear here"}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">Experience</h3>
          <p className="text-sm leading-relaxed">
            {experience || "Your experience will appear here"}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">Education</h3>
          <p className="text-sm leading-relaxed">
            {education || "Your education will appear here"}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">Certificates</h3>
          <p className="text-sm leading-relaxed">
            {certificates || "Your certificates will appear here"}
          </p>
        </div>

      </div>
      <button
        onClick={downloadPDF}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download PDF
      </button>

    </div>
  )
}