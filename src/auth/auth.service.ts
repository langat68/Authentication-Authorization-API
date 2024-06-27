import { AuthOnTableUsers, TIAuthOnUser, TSAuthOnUser } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";
import { sendWelcomeEmail } from "../mail/mail";

export const createAuthUserService = async (user: TIAuthOnUser): Promise<string | null> => {
    // Check if a user with the same email already exists
    const existingUser = await db.query.AuthOnTableUsers.findFirst({
        where: sql`${AuthOnTableUsers.email} = ${user.email}`,
    });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    // Insert the new user
    await db.insert(AuthOnTableUsers).values(user);

    // Send welcome email

    if (user.email !== null && user.email !== undefined) {
        await sendWelcomeEmail(user.email, "Welcome to Our Service , Thank you for signing up!");
    } else {
        throw new Error("Invalid email address");
    }
    await sendWelcomeEmail(user.email, "Welcome to Our Service , Thank you for signing up!");

    return "User created successfully";
};

export const userLoginService = async (user: TSAuthOnUser) => {
    const { email, password } = user;
    return await db.query.AuthOnTableUsers.findFirst({
        columns: {
            email: true,
            role: true,
            password: true
            
        }, where: sql` ${AuthOnTableUsers.email} = ${email}`,
        with: {
            user: {
                columns: {
                    name: true,
                    contact_phone: true,
                    phone_verified:true,
                    email: true,
                    email_verified:true,
                    confirmation_code:true,
                    id: true
                }
            }
        }
    })
}