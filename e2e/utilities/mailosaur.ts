import MailosaurClient from "mailosaur";
import "dotenv/config";

const mailosaur = new MailosaurClient(process.env.MAILOSAUR_API_KEY!);

const serverId = process.env.MAILOSAUR_SERVER_ID!;

export class MailosaurHelper {
  static generateEmail(): string {
    const random = Math.random().toString(36).substring(2, 8);
    return `${random}@${serverId}.mailosaur.net`;
  }

  static async getOTP(emailAddress: string): Promise<string> {
    const message = await mailosaur.messages.get(
      serverId,
      {
        sentTo: emailAddress,
      },
      {
        timeout: 30000,
      },
    );

    // Extract first detected code
    const otp = message.html?.codes?.[0]?.value;

    if (!otp) {
      throw new Error("OTP not found in email");
    }

    return otp;
  }
}
