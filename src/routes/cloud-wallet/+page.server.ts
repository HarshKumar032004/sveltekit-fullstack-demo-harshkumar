// import NeucronSDK from "neucron-sdk";

// export const actions = {
//   login: async ({ request }) => {
//     const data = await request.formData();

//     const neucron = new NeucronSDK();

//     const authModule = neucron.authentication;
//     const walletModule = neucron.wallet;

//     const loginResponse = await authModule.login({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//     console.log(loginResponse);

//     const DefaultWalletBalance = await walletModule.getWalletBalance({});

//     return {
//       auth: true,
//       balance: DefaultWalletBalance.data.balance.summary,
//     };
//   },
//   // pay: async ({ request }) => {
//   //   const data = await request.formData();

//   //   const neucron = new NeucronSDK();

//   //   const authModule = neucron.authentication;
//   //   const walletModule = neucron.wallet;

//   //   const loginResponse = await authModule.login({
//   //     email: data.get("email"),
//   //     password: data.get("password"),
//   //   });
//   //   console.log(loginResponse);

//   //   const options = {
//   //     outputs: [
//   //       {
//   //         address: data.get("paymail"),
//   //         note: "gurudakshina",
//   //         amount: data.get("amount"),
//   //       },
//   //     ],
//   //   };
//   //   let payResponse;
//   //   try {
//   //     payResponse = await neucron.pay.txSpend(options);
//   //     console.log(payResponse);
//   //     return { success: true, payResponse: payResponse };
//   //   } catch (error) {
//   //     console.log(error.message);
//   //     return {success : false, payResponse : error.message}
//   //   }

//   // },
// };
