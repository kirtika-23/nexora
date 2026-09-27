import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(180),
  message: z.string().trim().min(10).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert(data);
    if (error) throw new Error("Your message could not be sent. Please try again.");
    return { success: true };
  });
