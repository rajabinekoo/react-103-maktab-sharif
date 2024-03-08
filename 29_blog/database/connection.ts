import mongoose from "mongoose";

class Connection {
  constructor() {
    this.init().catch((err) =>
      console.log(`[!] Database disconnected with error:`, err)
    );
  }

  async init() {
    await mongoose.connect(<string>process.env.mongodb_url);
    console.log("[+] Database connected");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Connection();
