import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

// Mock the 3D component to avoid Three.js issues in tests
jest.mock("@/components/hero-3d", () => ({
  Hero3D: () => <div data-testid="hero-3d">3D Hero Component</div>,
}))

describe("Home Page", () => {
  it("renders hero section", () => {
    render(<Home />)

    expect(screen.getByTestId("hero-3d")).toBeInTheDocument()
  })

  it("renders features section", () => {
    render(<Home />)

    expect(screen.getByText("What I Do")).toBeInTheDocument()
    expect(screen.getByText("Full Stack Development")).toBeInTheDocument()
    expect(screen.getByText("UI/UX Design")).toBeInTheDocument()
    expect(screen.getByText("Performance Optimization")).toBeInTheDocument()
  })

  it("renders CTA section", () => {
    render(<Home />)

    expect(screen.getByText("Ready to Work Together?")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact")
    expect(screen.getByRole("link", { name: /view my work/i })).toHaveAttribute("href", "/work")
  })
})
