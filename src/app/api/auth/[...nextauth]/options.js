import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "Your Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "*******",
                },
            },
            async authorize(credentials) {
                // TODO: CONNECT TO DATABASE
                const user = { email: credentials.email };
                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/register",
    },
    // callbacks: {
    //     async signIn({ user, profile, account, email, credentials }) {
    //         if (account.type === "oauth") {
    //             // TODO: Connect to Database
    //             return await signInWithOAuth({ account, profile });
    //         }
    //         return true;
    //     },
    //     async jwt({ token, trigger, session }) {
    //         // console.log(token);
    //         const user = await getUserByEmail({ email: token.email });
    //         // console.log(user);
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         return session;
    //     },
    // },
};

async function signInWithOAuth({ account, profile }) {
    // TODO: Check if User exist
    const user = {};
    if (user) return true;

    // TODO: If no account yet, create one here
    return true;
}

async function getUserByEmail({ email }) {
    // TODO: Get user
    const user = {};
    if (!user) throw new Error("Email does not exist");
    return { ...user._doc, _id: user._id.toString() };
}
