/*
 * @Description:
 * @Author: Bhb
 * @Date: 2024-04-10 16:12:51
 * @LastEditors: Bhb
 * @LastEditTime: 2024-04-12 16:17:37
 * @FilePath: \tentech-official\src\locales\lang\index.ts
 */
import { createI18n } from "vue-i18n";

// @ts-ignore
const messages = import.meta.globEager("../lang/*");

function getLocaleAll(): any {
  debugger;
  let message: any = {};
  for (const path in messages) {
    const locale = path.split("/")[1].split(".")[1];
    message[locale] = messages[path].default;
  }
  return message;
}

let i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  messages: getLocaleAll(),
});

export default i18n;
