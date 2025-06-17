export function sendToWhatsApp(formData: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  const phoneNumber = "6287700600208" // Replace with your WhatsApp number (with country code, no + or spaces)

  const message = `*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Gorilla Workout Portfolio Website`

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank")
}

export function createWhatsAppLink(message: string, phoneNumber = "6287700600208") {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
