import { helpers } from "vuelidate/lib/validators";

export function email_pattern(value) {
  return helpers.regex(/^([A-Za-z]|[0-9])+$/);
}
