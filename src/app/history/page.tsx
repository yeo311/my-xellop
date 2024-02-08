import HistoryFilter from '@/components/HistoryFilter'
import HistoryList from '@/components/HistoryList'
import getHistory from '@/module/xellop-apis/getHistory'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '사용 이력',
}

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const year = searchParams.year ?? new Date().getFullYear().toString()
  const month = searchParams.month ?? (new Date().getMonth() + 1).toString()

  const histories = await getHistory({ year, month })

  return (
    <>
      <HistoryFilter />
      <Suspense fallback={<div>loading...</div>}>
        <HistoryList histories={histories} />
      </Suspense>
    </>
  )
}
