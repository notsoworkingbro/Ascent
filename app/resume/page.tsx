"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [skills, setSkills] = useState("")
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [certificates, setCertificates] = useState("")

  return (
    <div className="p-8 grid md:grid-cols-2 gap-10">

      {/* FORM */}
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">Resume Builder</h1>

        <Separator />

        {/* BASIC INFO */}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Juan Dela Cruz"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="juan@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <Separator />

        {/* SKILLS */}

        <div className="space-y-2">
          <Label>Skills</Label>
          <Textarea
            placeholder="React, TypeScript, Node.js"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* EXPERIENCE */}

        <div className="space-y-2">
          <Label>Experience</Label>
          <Textarea
            placeholder="Describe your work experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <Separator />

        {/* EDUCATION */}

        <div className="space-y-2">
          <Label>Education</Label>
          <Textarea
            placeholder="BS Computer Science - University Name (2020-2024)"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        {/* CERTIFICATES */}

        <div className="space-y-2">
          <Label>Certificates</Label>
          <Textarea
            placeholder="AWS Certified Developer, Google Cloud Fundamentals"
            value={certificates}
            onChange={(e) => setCertificates(e.target.value)}
          />
        </div>

      </div>

      {/* RESUME PREVIEW */}

      <div className="bg-white border rounded-lg p-8 shadow-sm space-y-6">

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

    </div>
  )
}