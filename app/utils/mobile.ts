import { MOBILE_NUMBER } from "../constants/constants";

const makePhoneCall = (phoneNumber: string = MOBILE_NUMBER): void => {
  if (typeof window === "undefined") return;

  window.location.href = `tel:${phoneNumber}`;
};

export default makePhoneCall;
