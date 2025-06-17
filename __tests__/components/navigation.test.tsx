import { render, screen, fireEvent } from "@testing-library/react"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}))

// Mock window.scrollY
Object.defineProperty(window, "scrollY", {
  writable: true,
  value: 0,
})

describe("Navigation", () => {
  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue("/")
  })

  it("renders navigation items", () => {
    render(<Navigation />)

    expect(screen.getByText("Gorilla Workout")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Work")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("highlights active navigation item", () => {
    ;(usePathname as jest.Mock).mockReturnValue("/about")
    render(<Navigation />)

    const aboutLink = screen.getByText("About")
    expect(aboutLink).toHaveClass("text-white")
  })

  it("toggles mobile menu", () => {
    render(<Navigation />)

    const menuButton = screen.getByRole("button")
    fireEvent.click(menuButton)

    // Mobile menu should be visible
    expect(screen.getAllByText("Home")).toHaveLength(2) // Desktop + Mobile
  })

  it("applies scroll effect", () => {
    render(<Navigation />)

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 100 })
    fireEvent.scroll(window)

    // Navigation should have backdrop blur effect
    const nav = screen.getByRole("navigation")
    expect(nav).toHaveClass("bg-black/80", "backdrop-blur-md")
  })
})
