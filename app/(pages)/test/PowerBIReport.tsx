'use client'

import { PowerBIEmbed } from 'powerbi-client-react'
import { models, Embed } from 'powerbi-client'

export function PowerBIReport({ accessToken }: { accessToken?: string }) {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: '363a7d04-b706-40c0-aef4-7de4670aff2e',
        embedUrl:
          'https://app.powerbi.com/reportEmbed?reportId=363a7d04-b706-40c0-aef4-7de4670aff2e&groupId=0e13f9b9-886b-4894-bba7-3101dadc2a7c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUYtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTdhNGQ0YTQtZmIwNy00ODFkLWJhY2YtZjJlYTMyMTJkOTkxLyIsImlhdCI6MTcyMjI0MDk5MywibmJmIjoxNzIyMjQwOTkzLCJleHAiOjE3MjIyNDU3NDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFZYk1heHV3cFRadGpDcjAxQ1RDcDY4b0U4RnRCWmhLcG1GV251LzZaaDVLb3NCV2xFMmwvVy91TFJBbTU0U1RtdHBkbGNJQmxkVS9veDVENGtQMDVVUjRhckFNdFhJajRzc0dUMHN5R09Ndz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNb3JkcmVsIiwiZ2l2ZW5fbmFtZSI6Ik1hdHRoaWV1IiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMmEwMjphMDNmOjY0OTY6NjEwMDo0NTA1OmQwNjU6NjlhNDpmZDBlIiwibmFtZSI6Ik1hdHRoaWV1IE1vcmRyZWwiLCJvaWQiOiI5MGU5ZTU3MS1lNmE1LTQzMDQtODAyNi03OGFiMjMzNmFlYjEiLCJwdWlkIjoiMTAwMzIwMDM3MzM5RUREMCIsInJoIjoiMC5BYTRBcE5Ta3B3ZjdIVWk2el9McU1oTFprUWtBQUFBQUFBQUF3QUFBQUFBQUFBQ3RBSmcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoibHJGV2w1dlBzUnFZWmlkX1ZEZnF5Y2xrN2pTcTAwcGdrT0I0eVRMdnZ5byIsInRpZCI6ImE3YTRkNGE0LWZiMDctNDgxZC1iYWNmLWYyZWEzMjEyZDk5MSIsInVuaXF1ZV9uYW1lIjoiTWF0dGhpZXVAbW9yZHJlbC5wcm8iLCJ1cG4iOiJNYXR0aGlldUBtb3JkcmVsLnBybyIsInV0aSI6Imw4UW50amZJV0VXRm9iWUFSS1FkQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDI4IiwieG1zX3BsIjoiZW4tVVMifQ.kSPP6qAGHrWmsYQ9Y-OC8cW9hTLzyzba-se6D6PY1g8SW18KFsoDAdyZk30XvQXv3rNr_8wMBVSR2avPl3DCQidbHt2chK-Pl8SJNDU4IPxJpJrgFO3jQ68IczUEr3oAFs-Ntw1hOF2tjm5rDQjP2aoskUruwMdfJWu9gaGBgwsGaMXMmHsTtzeQa2t6_fnxmkz-ZB3I2yDw43aAxIzAO0A-JTef5UdO2ETS0IXJh3uY621MGChfg2h7c9VuCsScKruafAIm2hGw1cV9XKJtMbVpxW3FFCGD9bO6g1m1HpHH7HgOtBYW1EHtQGgN2bUxBYBBdgAhgqQ5u6R1-wuP6Q',
        tokenType: models.TokenType.Aad, //Use embed if using embed token
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          },
          background: models.BackgroundType.Transparent
        }
      }}
      eventHandlers={
        new Map([
          [
            'loaded',
            function () {
              console.log('Report loaded')
            }
          ],
          [
            'rendered',
            function () {
              console.log('Report rendered')
            }
          ],
          [
            'error',
            function (event) {
              console.log(event?.detail)
            }
          ],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)]
        ])
      }
      cssClassName={'reportClass'}
      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport
      }}
    />
  )
}
