This is a [Next.js](https://nextjs.org/) starter app with Authentication using Next-auth

## Demo
[View-Demo](https://next-boilerplate.leiisme.com/)


## Configuration

1. Create a `.env` file in the root directory of the project.
2. Copy the content below into the `.env` file.
3. Replace the placeholder values with your specific configurations.

```plaintext
# .env file

PUBLIC_HOSTNAME=http://localhost:3000/
NEXTAUTH_URL=http://localhost:3000/ # update in build
NEXTAUTH_SECRET=your_next-auth_secret
GITHUB_ID=your_app_github_id
GITHUB_SECRET=your_app_github_secret
GOOGLE_CLIENT_ID=your_app_google_client_id
GOOGLE_CLIENT_SECRET=your_app_google_client_secret
```

### Install npm dependecies:
```bash
npm install
```

### Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
