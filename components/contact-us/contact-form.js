import { useState } from "react";
export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("بدون عنوان");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_BASE}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Space-App-Key": process.env.NEXT_PUBLIC_API_KEY,
          },
          body: JSON.stringify({ name, email, title, message }),
        }
      );

      if (response.status === 200) {
        setStatus("resolved");
      } else if (response.status === 422) {
        setStatus("rejected");
        throw new Error("Error submitting the form");
      } else if (response.status === 500) {
        setStatus("server-error");
        fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/alert/server-error`, {
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
  {
    status === "resolved" && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <h1>تم إرسال رسالتكم بنجاح</h1>
        <p>
          <strong>شكراً لتواصلكم معنا </strong> لم يتم إرسال رسالتكم، جميع
          الحقول مطلوبة، الرجاء وضع بيانات سليمة قبل المتابعة.
        </p>
        <hr />
        <p dir="ltr">
          <strong>Oops! </strong>Your message was not processed, please fill all
          the fields to continue.
        </p>
      </div>
    );
  }
  {
    status === "server-error" && (
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
          <button type="submit" className="btn btn-primary">
            Send / إرسال
          </button>
        </form>
      </section>
    </>
  );
}
