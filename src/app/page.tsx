"use client"

import { setLanguage } from "@/redux-store/app"
import { useTranslations } from "next-intl"

import { useRedux } from "@/hooks"
import { Button } from "@/components/ui/button"

export default function Home() {
  const t = useTranslations()
  const { app, dispatch } = useRedux()
  const { language } = app
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <div className="inline-flex items-center gap-2">
        <h1 className="text-lg font-semibold underline">{t("appName")}</h1>
        <Button
          className="hidden cursor-pointer uppercase"
          onClick={() => dispatch(setLanguage(language === "ta" ? "en" : "ta"))}
        >
          {language}
        </Button>
      </div>
      <p className="text-sm">
        Next App with prettier, eslint, husky, lint-staged
      </p>
    </div>
  )
}
