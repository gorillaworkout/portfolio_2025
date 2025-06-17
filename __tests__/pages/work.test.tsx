import { render, screen } from "@testing-library/react"
import Work from "@/app/work/page"

describe("Work Page", () => {
  it("renders page title and description", () => {
    render(<Work />)

    expect(screen.getByText("My Work")).toBeInTheDocument()
    expect(screen.getByText(/Here's a collection of projects/)).toBeInTheDocument()
  })

  it("renders featured projects section", () => {
    render(<Work />)

    expect(screen.getByText("Featured Projects")).toBeInTheDocument()
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument()
    expect(screen.getByText("Task Management App")).toBeInTheDocument()
  })

  it("renders other projects section", () => {
    render(<Work />)

    expect(screen.getByText("Other Projects")).toBeInTheDocument()
    expect(screen.getByText("3D Portfolio Website")).toBeInTheDocument()
    expect(screen.getByText("Weather Dashboard")).toBeInTheDocument()
  })

  it("renders project links", () => {
    render(<Work />)

    const demoLinks = screen.getAllByText(/demo/i)
    const codeLinks = screen.getAllByText(/code/i)

    expect(demoLinks.length).toBeGreaterThan(0)
    expect(codeLinks.length).toBeGreaterThan(0)
  })

  it("renders CTA section", () => {
    render(<Work />)

    expect(screen.getByText("Interested in Working Together?")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact")
  })
})
