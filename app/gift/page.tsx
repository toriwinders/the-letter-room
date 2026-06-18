import { redirect } from "next/navigation";

export default function GiftRedirect() {
  redirect("https://buy.stripe.com/14A14mfwB4vnfFfgjY4gg03?prefilled_promo_code=GIFTFREE");
}
