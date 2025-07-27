import z from "zod";

export const AuthScheema = z.object({
    code: z.string().min(3, { error: "Invalid Code!" }).max(100, { error: "Invalid code!" }),
    installation_id: z.string().min(3, { error: "Invalid installation_id" }).max(100, { error: "Invalid installation_id" }).nullable()
});

export type AuthBody = z.infer<typeof AuthScheema>;

export type EmailResponse = {
    email: string,
    primary: boolean,
    verified: boolean,
    visiblity: string
}