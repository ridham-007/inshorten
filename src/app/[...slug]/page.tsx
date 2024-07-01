import { notFound, useRouter } from "next/navigation";
// import { GetPopularNews, GetRecentNews, LoadContentUsingSlug } from "./actions";
import { Suspense } from "react";
import CategoryWiseTopNews, { CategoryWiseTopNewsSkeleton } from "@/components/category-wise-top-news";
import ShowArticle, { ArticleSkeleton } from "@/components/show-article";
import DynamicNewsWall, { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { Metadata, ResolvingMetadata } from "next";
import { getArticleWithPage, getPopularNews, getRecentNews } from "../_actions/article";
import AboutUs from "@/components/about-us";
import PrivacyPolicy from "@/components/privacy-policy";
import ContactForm from "@/components/contact-form";
import TermsConditions from "@/components/terms-conditions";
import Disclaimer from "@/components/disclaimer";

function getMetaDataOfAbout(): Metadata {
  return {
    title: "About Us - inshorten.com",
    description: "Welcome to InShorten, your go-to source for the latest news and articles on a wide range of topics",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "About Us - inshorten.com",
      description: "Welcome to InShorten, your go-to source for the latest news and articles on a wide range of topics",
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfPrivacyPolicy(): Metadata {
  return {
    title: "Privacy Policy - inshorten.com",
    description: "Read InShorten's Privacy Policy to understand how we protect and manage your data and privacy while using our services.",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Privacy Policy - inshorten.com",
      description: "Read InShorten's Privacy Policy to understand how we protect and manage your data and privacy while using our services."
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfTerms(): Metadata {
  return {
    title: "Terms and Conditions - inshorten.com",
    description: "Review the Terms and Conditions for using InShorten's services. Understand your rights and responsibilities as a user of our platform",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Terms and Conditions - inshorten.com",
      description: "Review the Terms and Conditions for using InShorten's services. Understand your rights and responsibilities as a user of our platform"
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfDisclaimer(): Metadata {
  return {
    title: "Disclaimer - inshorten.com",
    description: "Disclaimer InShorten",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Disclaimer - inshorten.com",
      description: "Disclaimer InShorten"
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfContact(): Metadata {
  return {
    title: "Contact - inshorten.com",
    description: "Get in touch with InShorten for inquiries about our services. Contact us today for more information and support.",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Contact - inshorten.com",
      description: "Get in touch with InShorten for inquiries about our services. Contact us today for more information and support."
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}


export async function generateMetadata(
  { params, searchParams }: {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug: [path] } = params;
  switch (path) {
    case "about-us":
      return getMetaDataOfAbout();
    case "privacy-policy":
      return getMetaDataOfPrivacyPolicy();
    case "contact-us":
      return getMetaDataOfContact();
    case "terms-conditions":
      return getMetaDataOfTerms();
    case "disclaimer":
      return getMetaDataOfDisclaimer();
    default: {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/common/meta-data/${path}`,
          {
            next: { revalidate: 10 },
          }
        );
        const responseData = await res.json();
        const { metaData } = responseData?.data;

        return {
          title: metaData?.name || metaData?.title || "InShorten",
          description: metaData?.seo_description || metaData?.description || "InShorten",
          keywords: metaData?.keywords && [...metaData?.keywords],
          openGraph: {
            url: metaData?.openGraph?.url || metaData?.openGraph?.ogUrl,
            type: metaData?.openGraph?.type || metaData?.openGraph?.ogType,
            title: metaData?.openGraph?.title || metaData?.openGraph?.ogTitle,
            locale: metaData?.openGraph?.locale || metaData?.openGraph?.ogLocale,
            siteName: metaData?.openGraph?.site_name || metaData?.openGraph?.ogSiteName,
            description: metaData?.openGraph?.description || metaData?.openGraph?.ogDescription,
            images: [{
              url: metaData?.openGraph?.ogImage || ""
            }],
          },
          twitter: {
            title: "",
            description: "",
            images: ""
          },
          alternates: {
            canonical: process.env.NEXT_PUBLIC_SITE_URL
          }
        }

      } catch (e) {
        return {
          title: "InShorten: Latest News, Blog, Travel",
          description: "Discover the globe with our one-stop shop that provides the most recent news updates, a wide range of blog posts, and motivational travel guides."
        }
      }
    }
  }
}

export default function Slug({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams, params)
  const renderShimmerContent = () => {
    if (Array.isArray(params.slug) && params.slug.length > 0) {
      const dashCount = (params.slug[0].match(/-/g) || [])?.length;
      if (dashCount >= 2) {
        return <ArticleSkeleton />;
      } else {
        return <CategoryWiseTopNewsSkeleton />;
      }
    }
    else {
      return null;
    }
  }

  const renderContent = async () => {
    if (params.slug[0] === '_not-found') {
      return notFound();
    }
    switch (params.slug[0]) {
      case 'about-us':
        return <AboutUs />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'contact-us':
        return <ContactForm />;
      case 'terms-conditions':
        return <TermsConditions />;
      case 'disclaimer':
        return <Disclaimer />;
      default: {
        try {
          const data = await getArticleWithPage(`${params.slug[0]}`);
        } catch (e) {
          return notFound();
        }
      }
    }
  };

  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%]">
        {Array.isArray(params.slug) && params.slug.length > 0 && (
          <Suspense fallback={renderShimmerContent()}>
            {/* <LoadContentUsingSlug slug={params.slug[0]} /> */}
            {renderContent()}
          </Suspense>
        )}
      </section>
      <section className="flex flex-col gap-2 flex-1 basis-[100%] sm:basis-[28%] px-2">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
        {(async function () {
            const data = await getRecentNews();
            return (
              <DynamicNewsWall title="Recent News" news={data?.data} />
            );
          })()}
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
        {(async function () {
            const data = await getPopularNews();
            return (
              <DynamicNewsWall title="Popular News" news={data?.data} />
            );
          })()}
        </Suspense>
      </section>
    </main>
  );
}
