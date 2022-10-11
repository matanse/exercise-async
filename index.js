async function emailSendConfirmation() {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    const movies = await getTopMovies(customer.isGold);
    console.log(movies);
    await sendEmail(customer.email, movies);
    console.log("email sent...");
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
emailSendConfirmation();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email@",
      });
    }, 2000);
  });
}

function getTopMovies(isGold) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isGold) {
        reject({ message: "customer is not gold." });
      } else {
        resolve(["movie1", "movie2"]);
      }
    }, 2000);
  });
}

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sending email to: ", email);
      resolve();
    }, 2000);
  });
}
