import EmailSubscription from './email-subscription'
export default function Page() {
  return (
    <>
      {/* main container */}
      <div className="flex items-center justify-center  h-[80vh] bg-zinc-200 dark:bg-zinc-600">
        <EmailSubscription />
      </div>
    </>
  )
}