async function postEmail(
  name = "Ej Angivet",
  subject = "ABF Novellgeneratorn",
  to,
  novell
) {
  try {
    const response = await fetch(`https://www.auralearning.se/api/v1/pm`, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: to,
        subject: subject,
        message: novell,
      }),
    });
    const data = await response.json();
    console.log("post email response", data);
    console.log("post email name", name);
    console.log("post email subject", subject);
    console.log("post email to", to);
    console.log("post email novell", novell);

    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return data;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
export default postEmail;

//  `http://localhost:3000/api/v1/skrivlabbet/pm`
// `https://www.auralearning.se/api/v1/skrivlabbet/pm`
