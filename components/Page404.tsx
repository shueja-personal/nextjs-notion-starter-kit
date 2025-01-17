import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'
import { PageHead } from './PageHead'


export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Notion Page Not Found'

  return (
    <>
      <PageHead site={site} />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>{title}</title>
      </Head>

      <div className={"container"}>
        <main className={"main"}>
          <h1>Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page "{pageId}" is publicly accessible.
              </p>
            )
          )}

          <img
            src='/404.png'
            alt='404 Not Found'
            className={"errorImage"}
          />
        </main>
      </div>
    </>
  )
}
