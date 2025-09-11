import {
  loadSpam,
  isSpam,
  hasRecentMessage,
  subscribe,
  subscriberExists,
  confirmSubscription,
  unsubscribe,
  logContact,
  generateContactTokens,
  confirmContactAction,
  updateContactStatus
} from "@/utils/blog/notion-service";

/**
 * Smoke‑test page: runs every helper once and prints a JSON report.
 * WARNING: calls create/update endpoints — generates real DB writes.
 */
export default async function Page() {
  /* ───── 1. Spam lists & quick spam check ───── */

  // const spamLists = await loadSpam();
  // const spamCheck = await isSpam({
  //   email: "spammer123@fakeemail.com",
  //   message: "make_money_fast – limited offer"
  // });

  /* ───── 2. Duplicate guard (5‑minute window) ───── */
  // const duplicate = await hasRecentMessage("visitor@example.com");

  /* ───── 3. Subscriber round‑trip ───── */
  let subToken, subConfirm, subUnsub;
  // if (!(await subscriberExists("demo@example.com"))) {
  //   ({ token: subToken } = await subscribe({ email: "demo@example.com" }));
  //   subConfirm = await confirmSubscription(subToken);
  //   subUnsub   = await unsubscribe("demo@example.com");
  // }

  /* ───── 4. Contact flow ───── */
  // const { pageId } = await logContact({
  //   name: "Visitor",
  //   email: "visitor@example.com",
  //   message: "Hello from the diagnostic page"
  // });

  // const { confirmToken, cancelToken } = await generateContactTokens(
  //   "visitor@example.com",
  //   pageId
  // );

  // const confirmRes = await confirmContactAction(confirmToken, "confirm");
  // let cancelError = null;
  // try {
  //   await confirmContactAction(cancelToken, "cancel");
  // } catch (err) {
  //   cancelError = err.message;
  // }

  // await updateContactStatus(pageId, "In Progress");

  /* ───── Collate report ───── */
  // const report = {
  //   spamListsLoaded: spamLists,
  //   spamCheck,
  //   duplicate,
  //   subscription: {
  //     tokenGenerated: !!subToken,
  //     confirmResult: subConfirm ?? "skipped (already existed)",
  //     unsubscribeResult: subUnsub ?? "skipped"
  //   },
  //   contact: {
  //     pageId,
  //     confirmRes,
  //     cancelError
  //   }
  // };

  return (
    <>
      {/* <main className="prose max-w-xl mx-auto p-8" dir="ltr">
        <h1>Notion‑Service Smoke Test</h1>
        <p className="text-sm text-gray-500">Each page load writes to your Notion workspace. Remove when done.</p>
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {JSON.stringify(report, null, 2)}
        </pre>
      </main> */}
    </>
  );
}
