// import { Root } from "../../contracts/root";
// import { DefaultProvider, sha256, bsv, toByteString } from "scrypt-ts";
// import { NeucronSigner } from "neucron-signer";

// let instance;

// export const actions = {
//   deploy: async ({ request }) => {
//     const data = await request.formData();
//     const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
//     const signer = new NeucronSigner(provider);
//     await signer.login("sales@timechainlabs.io", "string");
//     await Root.loadArtifact();

//     const square = BigInt(data.get('square'));
//     instance = new Root(square);
//     await instance.connect(signer);

//     const deployTx = await instance.deploy(data.get('bounty'));
//     console.log(
//       "smart lock deployed : https://whatsonchain.com/tx/" + deployTx.id
//     );

//     return { success : true }
//   },
// };
