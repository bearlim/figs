export function SignIn(userEmail, userPass) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "kjhaskjdhjhasd98798daskjhdas98ydasljkda98sy",
        user: {
          user_id: 1,
          name: "Yuri",
          email: "yplucena@gmail.com",
          image_url: "https://avatars.githubusercontent.com/u/77466092?v=4",
        },
      });
    }, 200);
  });
}
