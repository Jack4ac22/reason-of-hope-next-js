'use server'
export async function contact(data) {
  const api_key = process.env.API_KEY ?? "no api key";
  const api_url = process.env.API_URL_BASE ?? "no api key";
  const { name, email, title, message } = data;

  try {
    const response = await fetch(`${api_url}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Space-App-Key": api_key,
      },
      body: JSON.stringify({ name, email, title, message }),
    });

    // Return the full response from the API call
    return response?.status;
  } catch (error) {
    console.error("API request failed:", error);

    // Return a 500 status with a custom message in case of error
    return new Response(
      JSON.stringify({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
