import { siteContent } from "../constants/siteContent";

const makePhoneCall = (phoneNumber: string = siteContent.contact.mobileNumber): void => {
  if (typeof window === "undefined") return;

  window.location.href = `tel:${phoneNumber}`;
};

export default makePhoneCall;
