import { redirect } from 'next/navigation';

export async function contact(data) {
  const api_key = process.env.API_KEY ?? "no api key";
  const api_url = process.env.API_URL_BASE ?? "no api key";
  const name = data.name;
  const email = data.email;
  const title = data.title;
  const message = data.message;

  const response = await fetch(`${api_url}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Space-App-Key": api_key,
    },
    body: JSON.stringify({ name, email, title, message }),
  });
  const result = await response.json();
  if (result.status === 200) {
    redirect("/contact/success");
  } else {
    redirect("/contact/error");
  }
}
