"use client"

import { useState } from "react"

import type {ResumeData} from "@/lib/types"

import EditorPanel from "@/components/resume/EditorPanel"
import PreviewPanel from "@/components/resume/PreviewPanel"


import { useRef } from "react"
import html2canvas from "html2canvas-pro"
import jsPDF from "jspdf"


export default function ResumePage() {
  const [template, setTemplate] = useState("modern")

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

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
    })

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
    <div className="flex border h-screen">

      {/* LEFT: Editor */}
      <div className="w-1/3 border border-gray-300 h-full">
        <div className="p-6 h-full overflow-y-auto">
          <EditorPanel data={data} setData={setData} template={template} setTemplate={setTemplate} />
          {/* Download Button */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
      

      {/* RIGHT: Preview + Templates */}
      <div className="flex-1 flex flex-col h-full">

        {/* Preview */}
        <div className="flex-1 p-6 overflow-auto bg-gray-100">
          <PreviewPanel data={data} template={template} resumeRef={resumeRef}/>
        </div>

      </div>
    </div>
  )
}