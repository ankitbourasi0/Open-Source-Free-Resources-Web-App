import EmailSubscriptionBox from "components/EmailSubscriptionBox";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contribution from "pages/contribution";

const Container = ({ children, meta }: ContainerProps) => {
  // instances
  const router = useRouter();

  return (
    <div className="mb-8 dark:bg-zinc-900">
      {/* Head */}

      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://https://blogging-tutorial-app.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://https://blogging-tutorial-app.vercel.app/${router.asPath}`}
        />
        <meta property="og:site_name" content="Next Dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextDev1111" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* Head closing */}

      {/* main */}
      <div className="flex flex-col items-center sm:px-8 px-6">
        <div className="max-w-3xl w-full">
          {/* navbar */}
          {/* <Navbar /> */}
          {/* navbar closing */}
    
          <div className="">
            {children
            
          }


            {/* add this too about us page   */}
            {/* <EmailSubscriptionBox /> */}

            {/* <Footer /> */}
          </div>
        </div>
      </div>
      {/* main closing */}
    </div>
  );
};

export default Container;
