import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactUsForm(props) {
  const router = useRouter();

  const url = props.url;
  const key = props.key;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("بدون عنوان");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const response = await fetch(`${url}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Space-App-Key": key,
        },
        body: JSON.stringify({ name, email, title, message }),
      });

      if (response.status === 200) {
        setStatus("resolved");
      } else if (response.status === 422) {
        setStatus("rejected");
        throw new Error("Error submitting the form");
      } else if (response.status === 500) {
        setStatus("server-error");
        fetch(`${url}/alert/server-error`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Space-App-Key": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        throw new Error("Error submitting the form");
      }
      console.log(response);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  if (status === "resolved") {
    setTimeout(() => {
      router.push("/");
    }, 5000);
    return (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <h1>شكراً لكم</h1>
        <p>
          <strong>تم إرسال رسالتكم بنجاح</strong>، سنقوم بالرد عليكم في أقرب وقت
          ممكن.
        </p>
        <p>
          سيتم تحويلكم إلى{" "}
          <Link href="/" className="btn btn-success">
            الصفحة الرئيسية
          </Link>{" "}
          في غضون 5 ثوانٍ.
        </p>
        <hr />
        <h1 dir="ltr">Thank you</h1>
        <p dir="ltr">
          Your message has been sent <strong>successfully</strong>, we will
          reply to you as soon as possible.
        </p>
        <p dir="ltr">
          You will be redirected to the{" "}
          <Link href="/" className="btn btn-success">
            home page
          </Link>{" "}
          in 5 seconds.
        </p>
      </div>
    );
  }
  {
    if (status === "server-error") {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <h1>خطأ في المُخدِّم</h1>
          <p>
            <strong>عذراً! </strong>حدث خطأ في الخادم، الرجاء المحاولة مرة أخرى.
          </p>
          <hr />
          <p dir="ltr">
            <strong>Oops! </strong>There was an error in the server, please try
            again.
          </p>
        </div>
      );
    }
  }
  return (
    <>
      {status === "rejected" && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <p>
            <strong> عذراً!</strong> لم يتم إرسال رسالتكم، جميع الحقول مطلوبة،
            الرجاء وضع بيانات سليمة قبل المتابعة.
          </p>
          <hr />
          <p dir="ltr">
            <strong>Oops! </strong>Your message was not processed, please fill
            all the fields to continue.
          </p>
          {}
        </div>
      )}
      <section className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name_form_controler" className="form-label">
              الإسم / Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name_form_controler"
              placeholder="بولس الطرسوسي"
              onChange={(e) => setName(e.target.value)}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email_form_controler" className="form-label">
              البريد الإلكتروني / Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email_form_controler"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title_form_controler" className="form-label">
              عنوان الرسالة / Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title_form_controler"
              placeholder="طلب كتاب / استفسار / شكوى / اقتراح / غير ذلك"
              onChange={(e) => setTitle(e.target.value)}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text_area_form_controler" className="form-label">
              رسالتكم / Your message
            </label>
            <textarea
              className="form-control"
              id="text_area_form_controler"
              rows="5"
              // required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Send / إرسال
          </button>
        </form>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const url = process.env.API_KEY;
  const key = process.env.API_URL_BASE;
  console.log("url", url);
  console.log("key", key);
  return {
    props: {
      url,
      key,
    },
    revalidate: 30000,
  };
}
