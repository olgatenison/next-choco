This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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
![site map](https://github.com/olgatenison/next-choco/blob/main/public/forDescription/itWorks_01.jpg)
![site map context](https://github.com/olgatenison/next-choco/blob/main/public/forDescription/itWorks_02.jpg)



<details>
<summary>❌ - Обробка стану завантаження</summary>
В моєму проекті, я вирішив обробити стан завантаження, не використовуючи функціональність loading.js. Я замість цього вирішив відобразити спрощений індикатор завантаження.

javascript
Copy code
import React from "react";

const Loading = () => {
  return (
    <>
      <Image src="../spinner177px.svg" width={177} height={177}></Image>
    </>
  );
};

export default Loading;
Вище наведений код представляє компонент Loading, який відображає спінер завантаження. Я використовую його в моєму проекті для інформування користувача про те, що щось завантажується.

</details>

This project, including design and execution, was skillfully crafted by [Olga Tenison](https://github.com/olgatenison) under the invaluable mentorship of [Matthias Bruch](https://github.com/matthiasbruch).

The design of the project incorporates fonts [Montserrat](https://nextjs.org/docs/basic-features/font-optimization](https://fonts.google.com/specimen/Montserrat?query=Montserrat) and [Marcellus SC](https://nextjs.org/docs/basic-features/font-optimization](https://fonts.google.com/specimen/Marcellus+SC) from Google Fonts.


