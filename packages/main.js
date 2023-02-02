import { format } from "date-fns";
import { af, eo } from "date-fns/locale";

console.log("Hello world");
const now = new Date();
console.log(now);
console.log(format(now, "yyyy MMMM dd, EEEE", { locale: af }));
console.log(format(now, "yyyy MMMM dd, EEEE", { locale: eo }));
