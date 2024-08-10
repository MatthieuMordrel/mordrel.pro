import FetchTest from './FetchTest'
import PowerBIReportweb from './PowerBIWeb'

const TestPage = () => {
  return (
    <div>
      {/* <FetchTest /> */}
      <PowerBIReportweb
        title="Draft File - Electricity"
        width={1000}
        height={600}
        src="https://app.powerbi.com/reportEmbed?reportId=7f1fcb4e-b2ab-426d-8214-0525ca5203fa&autoAuth=true&ctid=a7a4d4a4-fb07-481d-bacf-f2ea3212d991"
        className="mx-auto"
      />
    </div>
  )
}

export default TestPage
