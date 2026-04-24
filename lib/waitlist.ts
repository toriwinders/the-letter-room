export type WaitlistAddressPayload = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  firstName: string;
  lastName?: string;
  postalCode: string;
  state: string;
};

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function normalizeAddressPayload(payload: WaitlistAddressPayload) {
  return {
    address_line_1: payload.addressLine1.trim(),
    address_line_2: payload.addressLine2?.trim() || null,
    city: payload.city.trim(),
    country: payload.country.trim(),
    first_name: payload.firstName.trim(),
    last_name: payload.lastName?.trim() || null,
    postal_code: payload.postalCode.trim(),
    state_region: payload.state.trim(),
  };
}
