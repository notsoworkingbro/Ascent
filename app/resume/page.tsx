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
    address: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    github: "",
    summary: "",

    skills: [],
    experience: [],
    education: [],
    certificates: [],
  })

  const resumeRef = useRef<HTMLDivElement | null>(null)

  const downloadPDF = async () => {
    if (!resumeRef.current) return

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
    })

    const imgWidth = 816
    const pageHeight = 1056

    const imgHeight = (canvas.height * imgWidth) / canvas.width

    const pdf = new jsPDF({
      unit: "px",
      format: [imgWidth, pageHeight],
    })

    let position = 0
    let remainingHeight = imgHeight

    const imgData = canvas.toDataURL("image/png")

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
    remainingHeight -= pageHeight

    // Add more pages if needed
    while (remainingHeight > 0) {
      position -= pageHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      remainingHeight -= pageHeight
    }

    pdf.save("resume.pdf")
  }

  return (
    <div className="flex border h-screen">

      {/* Editor */}
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
      
      {/* Preview */}
      <div className="flex-1 flex flex-col h-full">

        <div className="flex-1 p-6 overflow-auto bg-gray-100">
          <PreviewPanel data={data} template={template} resumeRef={resumeRef}/>
        </div>

      </div>
    </div>
  )
}