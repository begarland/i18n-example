import ExampleTranslationUsingRichText from "@/components/ExampleTranslationsUsingRichText"
import ExampleTranslationUsingArgument from "@/components/ExampleTranslationUsingArgument"
import ExampleTranslationUsingPluralization from "@/components/ExampleTranslationUsingPluralization"

const Page = () => {
    return (
      <div className="">
      <div>
        <p>The below example uses an argument</p>
        <ExampleTranslationUsingArgument />
      </div>
        <div>
        <p>The below example demonstrates pluralization</p>
        <ExampleTranslationUsingPluralization />
      </div> 
      <div>
        <p>The below example uses rich text</p>
        <ExampleTranslationUsingRichText />
      </div>
     
      </div>

    )
}

export default Page