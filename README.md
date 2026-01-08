# I18n and Localization in Contentful with Next.js Playground

The purpose of this project is to act as a toy model to demonstrate best practices using i18n and to be used as a playground for practicing with i18n. 


---
## Background:


Internationalization is abbreviated as `i18n` as there are 18 letters between the `i` and the `n` in the word `internationalization`.

Internationalization (i18n) is a critical architectural strategy that decouples an application's logic from its content, allowing the application to scale globally without rewriting code. Beyond just translating text, it handles complex cultural nuances like date formats, currencies, and pluralization rules that are essential for building user trust and accessibility. By implementing i18n, teams can significantly improving SEO and market reach across non-English speaking region.

## Best Practices

### 1. Structure & Naming
Use Functional Key Names: Name keys based on their purpose rather than their value.

❌ {"submit_button": "Submit"} (Bad if the button text changes to "Send")

✅ {"auth.form.action_primary": "Submit"}

Namespace Deeply: Group keys by feature or page (e.g., cart.json, settings.json) to prevent a single common.json file from becoming a multi-thousand-line bottleneck.

### 2. Implementation Logic
Never Concatenate Strings: Avoid t('hello') + user.name. Different languages have different word orders. Always use interpolation:

✅ t('greeting', { name: user.name }) → "Hello, {{name}}"

Handle Plurals Correctly: Don't use logic like count === 1 ? 'item' : 'items'. Use the i18n library’s built-in pluralization:

✅ {"item_interval_one": "1 item", "item_interval_other": "{{count}} items"}

Avoid Hidden Logic in Strings: Don't put HTML tags inside your JSON if possible. Use Trans Components for complex strings that require bolding or links within a sentence.

### 3. Workflow & Tooling
Automate Key Checks: Use an ESLint plugin like eslint-plugin-i18next to automatically flag hardcoded strings during development.

Enforce TypeScript Mapping: Ensure your t() function is strictly typed so that developers get IDE autocompletion and errors if they reference a key that doesn't exist.

Visual Padding: Always design UI with "text expansion" in mind. English is concise; expect German or Italian translations to take up 30% more space.

### 4. Localization (L10n)
Standardize Date/Number Formatting: Use the Intl API or i18n library helpers. Never hardcode / or . as separators.

Fallback Strategy: Always define a fallbackLng (usually en) so the UI doesn't show empty gaps or raw keys if a specific translation is missing.

## Code Review Checklist

- [ ] No Hardcoded Strings: Ensure all user-facing text is wrapped in a t() function and resides in a JSON locale file.

- [ ] Dynamic Data: Use interpolation (e.g., `t('welcome', { name: userName })`) rather than string concatenation to maintain correct sentence structure across languages.

- [ ] Layout Flexibility: Verify that the UI doesn't break when strings expand (especially important for German or French) and that containers aren't using fixed widths for text.

- [ ] Contextual Keys: Use descriptive keys (e.g., `auth.login.button_label` vs just `login`) to provide translators with enough context to choose the right word.

- [ ] Formatters: Ensure dates, times, and currencies are handled via the i18n library’s formatting functions rather than JavaScript’s basic `.toLocaleString()`

---

High level breakdown:

- how to use translate with `t({})`
    - adding translations to a translations file 
    - using tools like counting, plural
- Using Translate with `<Trans>`
- Best Practices in i18n

- Contentful
    - Localizing components 
    - upload to contentful -> this would be only necessary for engineers working on the Contentful MFE 


---



## To run the project

Start the development server with:

```bash
npm run dev
```


