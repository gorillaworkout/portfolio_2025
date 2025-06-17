import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Contact from "@/app/contact/page"

// Mock the toast hook
jest.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

describe("Contact Page", () => {
  it("renders page title and description", () => {
    render(<Contact />)

    expect(screen.getByText("Get In Touch")).toBeInTheDocument()
    expect(screen.getByText(/Have a project in mind/)).toBeInTheDocument()
  })

  it("renders contact form", () => {
    render(<Contact />)

    expect(screen.getByLabelText("First Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Subject")).toBeInTheDocument()
    expect(screen.getByLabelText("Message")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })

  it("renders contact information", () => {
    render(<Contact />)

    expect(screen.getByText("Contact Information")).toBeInTheDocument()
    expect(screen.getByText("contact@gorillaworkout.id")).toBeInTheDocument()
    expect(screen.getByText("+62 123 456 7890")).toBeInTheDocument()
    expect(screen.getByText("Jakarta, Indonesia")).toBeInTheDocument()
  })

  it("handles form submission", async () => {
    render(<Contact />)

    const firstNameInput = screen.getByLabelText("First Name")
    const emailInput = screen.getByLabelText("Email")
    const messageInput = screen.getByLabelText("Message")
    const submitButton = screen.getByRole("button", { name: /send message/i })

    fireEvent.change(firstNameInput, { target: { value: "John" } })
    fireEvent.change(emailInput, { target: { value: "john@example.com" } })
    fireEvent.change(messageInput, { target: { value: "Test message" } })

    fireEvent.click(submitButton)

    expect(screen.getByText("Sending...")).toBeInTheDocument()

    await waitFor(
      () => {
        expect(screen.getByText(/send message/i)).toBeInTheDocument()
      },
      { timeout: 3000 },
    )
  })
})
