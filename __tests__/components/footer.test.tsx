import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"

describe("Footer", () => {
  it("renders footer content", () => {
    render(<Footer />)

    expect(screen.getByText("Gorilla Workout")).toBeInTheDocument()
    expect(screen.getByText(/Full Stack Developer passionate/)).toBeInTheDocument()
    expect(screen.getByText("Quick Links")).toBeInTheDocument()
    expect(screen.getByText("Connect")).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "/work")
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
  })

  it("renders social links", () => {
    render(<Footer />)

    const githubLink = screen.getByRole("link", { name: /github/i })
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    const emailLink = screen.getByRole("link", { name: /mail/i })

    expect(githubLink).toHaveAttribute("href", "https://github.com")
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com")
    expect(emailLink).toHaveAttribute("href", "mailto:contact@gorillaworkout.id")
  })

  it("displays current year in copyright", () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Gorilla Workout. All rights reserved.`)).toBeInTheDocument()
  })
})
