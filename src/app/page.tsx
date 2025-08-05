"use client"

import { setLanguage } from "@/redux-store/app"
import { useTranslations } from "next-intl"

import { useRedux } from "@/hooks"

export default function Home() {
  const t = useTranslations()
  const { app, dispatch } = useRedux()
  const { language } = app
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <div className="inline-flex items-center gap-2">
        <h1 className="text-lg font-semibold underline">{t("appName")}</h1>
        <p
          onClick={() => dispatch(setLanguage(language === "ta" ? "en" : "ta"))}
        >
          {language}
        </p>
      </div>
      <p className="text-sm">
        Next App with prettier, eslint, husky, lint-staged
      </p>
    </div>
  )
}
