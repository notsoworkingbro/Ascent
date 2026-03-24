type ResumeData = {
  name: string
  address: string
  email: string
  phone: string
  linkedin: string
  portfolio: string
  github: string
  summary: string

  skills: string[]
  experience: {
    company: string
    duration: string
    description: string
  }[]

  education: {
    school: string
    duration: string
    degree: string
    info: string
  }[]

  certificates: string[]
}

export type { ResumeData }