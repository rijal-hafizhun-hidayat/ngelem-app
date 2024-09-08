import { EncryptStorage } from "encrypt-storage";

export default () => {
  return new EncryptStorage(process.env.ENCRYPT_KEY as string, {
    storageType: "sessionStorage",
  });
};
