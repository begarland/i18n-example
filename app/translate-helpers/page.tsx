import ExampleTranslationUsingArgument from "@/components/ExampleTranslationUsingArgument"
import ExampleTranslationUsingPluralization from "@/components/ExampleTranslationUsingPluralization"

const Page = () => {
    return (
      <>
      <div>
        <p>The below example uses an argument</p>
        <ExampleTranslationUsingArgument />
      </div>
        <div>
        <p>The below example demonstrates pluralization</p>
        <ExampleTranslationUsingPluralization />
      </div>
     
      </>

    )
}

export default Page