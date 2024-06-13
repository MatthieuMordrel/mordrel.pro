'use client'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css' // Styling theme, you can choose others
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import { BulletPointsList } from '@/app/ui/Components/BulletPointsList'
import { HighlightedSentenceContent } from '@/app/ui/Components/ContentPaneHighlightedSentence'

const ApiIntegrationShowcase = () => {
  const codeSnippet = `
    import requests

    def fetch_customer_data(api_url, customer_id):
        headers = {
            'Authorization': 'Bearer your_api_token',
            'Accept': 'application/json'
        }
        
        try:
            response = requests.get(f"{api_url}/customers/{customer_id}", headers=headers)
            response.raise_for_status()  # Raises an HTTPError for bad responses
    
            # Process the response if successful
            data = response.json()
            print("Customer Data Retrieved Successfully:")
            print(data)
    
        except requests.exceptions.HTTPError as errh:
            print("An HTTP error occurred:", errh)
        except requests.exceptions.ConnectionError as errc:
            print("An Error Connecting to the API occurred:", errc)
        except requests.exceptions.Timeout as errt:
            print("A Timeout Error occurred:", errt)
        except requests.exceptions.RequestException as err:
            print("An Unknown Error occurred", err)
    
    # Example usage
    fetch_customer_data("https://api.example.com", "123456")
    `

  const listItems = [
    'Integrate with your current environment',
    'Tailor our approach for your needs',
    'Incorporated to plan for the future'
  ]

  const highlightedCode = hljs.highlight(codeSnippet, { language: 'python' }).value

  return (
    <div className="relative flex max-h-full flex-row flex-wrap justify-between gap-4 overflow-hidden md:p-6">
      <div className="flex min-w-[35%] max-w-[50%] flex-[1_1_0] flex-col justify-between p-4">
        <div className="">
          <TextHighlight className="mb-2 text-2xl md:text-3xl lg:text-4xl">
            Improve your Data Management
          </TextHighlight>
          <HighlightedSentenceContent
            HighlightedSentence="Let the machine do the work for you."
            MainContent="Harness the power of APIs to integrate and automate your business processes
              efficiently.
              We specialize in creating seamless integrations that save time and reduce errors,
              allowing you to focus on what's important."
          />
        </div>
        <BulletPointsList items={listItems} className="" />
      </div>
      <div className="flex-[0_0_1/2] p-4">
        <pre className="max-h-full max-w-full overflow-auto border-borderGrey bg-techGrey font-mono text-xs">
          <code
            className="language-python"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </div>
  )
}

export default ApiIntegrationShowcase
