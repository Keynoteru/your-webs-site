This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🔍 Configuración de Google Search Console y Analytics

Para configurar Google Analytics y Google Search Console, consulta el archivo **[GOOGLE_SETUP.md](./GOOGLE_SETUP.md)** que contiene una guía paso a paso.

### Configuración rápida:

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Añade las siguientes variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
   NEXT_PUBLIC_SITE_URL=https://your-webs.com
   ```
3. Reinicia el servidor de desarrollo

Para más detalles, consulta [GOOGLE_SETUP.md](./GOOGLE_SETUP.md).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
