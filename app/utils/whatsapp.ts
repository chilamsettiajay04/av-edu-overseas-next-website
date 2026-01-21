import { WHATSAPP_MESSAGE, MOBILE_NUMBER } from "../constants/constants";

const openWhatsAppApp = (
  phoneNumber: string = MOBILE_NUMBER,
  message: string = WHATSAPP_MESSAGE,
): void => {
  if (typeof window === "undefined") return;
  const encodedMessage = encodeURIComponent(message);
  const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.location.href = appUrl;
};

export default openWhatsAppApp;
