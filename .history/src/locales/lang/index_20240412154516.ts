/*
 * @Description:
 * @Author: Bhb
 * @Date: 2024-04-10 16:12:51
 * @LastEditors: Bhb
 * @LastEditTime: 2024-04-12 15:44:36
 * @FilePath: \tentech-official\src\locales\lang\index.ts
 */
import { createI18n } from "vue-i18n";

// @ts-ignore
const messages = import.meta.globEager("../locales/lang*");

function getLocaleAll(): any {
  debugger;
  let message: any = {};
  for (const path in messages) {
    const locale = path.substr(path.lastIndexOf("/") + 1, 2);
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
