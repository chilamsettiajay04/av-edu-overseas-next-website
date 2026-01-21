import { siteContent } from "../constants/siteContent";

const openWhatsAppApp = (
  phoneNumber: string = siteContent.contact.mobileNumber,
  message: string = siteContent.contact.whatsappMessage,
): void => {
  if (typeof window === "undefined") return;
  const encodedMessage = encodeURIComponent(message);
  const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.location.href = appUrl;
};

export default openWhatsAppApp;
