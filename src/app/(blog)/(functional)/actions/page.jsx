// import { confirmSubscription, getSubscriberData, updateSubscriberDetails } from '@/utils/blog/notion-service';
// import SubscriberDetailsForm from "@/components/contact-us/subsciber-details-form"
// import SubscribeForm from "@/components/contact-us/subscribe-form"

export default async function ActionsPage({ searchParams }) {
  // const { token, action = 'none' } = searchParams;

  // // 1️⃣  subscription confirmation redirected here with ?token=…&action=confirmSub
  // if (action === 'confirmSub' && token) {
  //   try { await confirmSubscription(token); }
  //   catch (e) {
  //     switch (e.code) {
  //       case 'ERR_JWT_EXPIRED': return <p>Token expired</p>;
  //       case 'ERR_JWS_INVALID': return <p>Invalid token</p>;
  //       case 'ERR_SUBSCRIBER_NOT_FOUND': return <p>No pending subscriber</p>;
  //       default: throw e;
  //     }
  //     switch (e.message) {
  //       case 'No pending subscriber': return <p>No pending subscriber</p>;
  //       default: throw e;
  //     }
  //   }
  //   const data = await getSubscriberData(token);
  //   return <SubscriberDetailsForm token={token} initial={data} fun={updateSubscriberDetails} />;
  // }

  return <>
    {/* <SubscribeForm />
    <p>Actions page</p>
    <p>token: {token}</p>
    <p>action: {action}</p> */}
  </>
}
