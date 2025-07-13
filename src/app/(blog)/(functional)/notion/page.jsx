import { loadSpam, isSpam, subscribe, subscriberExists, confirmSubscription, unsubscribe, logContact, updateContactStatus } from "@/utils/blog/notion-service";

export default async function Page() {
  // const spam= await loadSpam();
  // console.log(spam);
  // const testSpam = await isSpam({ email: '1@1.com', message: 'asdasd' });
  // console.log("testSpam", testSpam);
  // const token = await subscribe({ email: '13@1.com' });
  // console.log(token);
  // const exists = await subscriberExists('1333@1.com');
  // console.log(exists);
  // const subId = await confirmSubscription("eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjEzQDEuY29tIiwiYWN0IjoiY29uZmlybSIsImV4cCI6MTc1MjUyNTA3NH0.YTqFUcxADy70--rqdTLgDm7V5Jj9Zx6DfxI6ZsPXYe8");
  // console.log(subId);
  // console.log(await unsubscribe('13@1.com'));
  // const res = await logContact({ name: 'test', email: '13@1.com', title: 'test', message: 'test' });
  // console.log(res);
  return (
    <div></div>
  );
}