import { getSubscriberData, updateSubscriberDetails } from '@/utils/blog/notion-service';
import SubscriberDetailsForm from "@/components/contact-us/subsciber-details-form"
import SubscribeForm from "@/components/contact-us/subscribe-form"

export default async function ActionsPage({ searchParams }) {
  const { token, action = 'none' } = searchParams;

  // 1️⃣  subscription confirmation redirected here with ?token=…&action=confirmSub
  if (action === 'confirmSub' && token) {
    const data = await getSubscriberData(token);
    return <SubscriberDetailsForm token={token} initial={data} fun={updateSubscriberDetails} />;
  }

  return <>
    <SubscribeForm />
    <p>Actions page</p>
    <p>token: {token}</p>
    <p>action: {action}</p>
  </>
}
