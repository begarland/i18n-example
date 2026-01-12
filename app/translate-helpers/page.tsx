import ExampleTranslationUsingRichText from "@/components/ExampleTranslationsUsingRichText"
import ExampleTranslationUsingArgument from "@/components/ExampleTranslationUsingArgument"
import ExampleTranslationUsingNumberFormatting from "@/components/ExampleTranslationUsingNumberFormatting"
import ExampleTranslationUsingPluralization from "@/components/ExampleTranslationUsingPluralization"
import ExampleTranslationUsingSelect from "@/components/ExampleTranslationUsingSelect"
import { useTranslations } from "next-intl"

const Page = () => {
    const t = useTranslations("TranslateHelpers")
    return (
      <div className="">
        <div>
            <p>{t('argument')}</p>
            <ExampleTranslationUsingArgument />
        </div>
            <div>
            <p>{t('pluralization')}</p>
            <ExampleTranslationUsingPluralization />
        </div> 
        <div>
            <p>{t('rich')}</p>
            <ExampleTranslationUsingRichText />
        </div>
        <div>
            <p>{t("select")}</p>
            <ExampleTranslationUsingSelect />
        </div>
        <div>
            <p>{t("number")}</p>
            <ExampleTranslationUsingNumberFormatting />
        </div>
     
      </div>

    )
}

export default Page