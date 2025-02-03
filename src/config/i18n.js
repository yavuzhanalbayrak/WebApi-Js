import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "tr"],
    backend: {
      loadPath: path.resolve(__dirname, "../locales/{{lng}}.json"),
    },
    detection: {
      order: ["querystring", "cookie", "header"],
      caches: ["cookie"],
    },
  });

export default i18next;
export const i18nMiddleware = middleware.handle(i18next);
