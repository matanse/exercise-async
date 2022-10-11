getCustomer(1, (customer) => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});

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
