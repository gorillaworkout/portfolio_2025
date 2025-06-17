import { render, screen } from "@testing-library/react"
import About from "@/app/about/page"

describe("About Page", () => {
  it("renders page title and description", () => {
    render(<About />)

    expect(screen.getByText("About Me")).toBeInTheDocument()
    expect(screen.getByText(/I'm a passionate Full Stack Developer/)).toBeInTheDocument()
  })

  it("renders skills section", () => {
    render(<About />)

    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Next.js")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
  })

  it("renders experience section", () => {
    render(<About />)

    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Senior Full Stack Developer")).toBeInTheDocument()
    expect(screen.getByText("Tech Company")).toBeInTheDocument()
  })

  it("renders values section", () => {
    render(<About />)

    expect(screen.getByText("My Values")).toBeInTheDocument()
    expect(screen.getByText("Quality First")).toBeInTheDocument()
    expect(screen.getByText("Continuous Learning")).toBeInTheDocument()
    expect(screen.getByText("User-Centric")).toBeInTheDocument()
  })
})
