"use server"

export async function getRecentNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/article/${process.env.NEXT_PUBLIC_SITE_ID}/recent`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { articles = [] } = responseData;
    return {
      data: articles,
      success: true
    }
  } catch (e: any) {
    console.error(e);
  }
}

export async function getPopularNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/article/${process.env.NEXT_PUBLIC_SITE_ID}/popular`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { articles = [] } = responseData;
    return {
      data: articles,
      success: true
    }
  } catch (e: any) {
      console.error(e);
  }
}

export async function getArticleWithPage(slug: any, page: number = 0, size: number = 0) {
  try {
    console.log(slug, "Nidhin")
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/${process.env.NEXT_PUBLIC_SITE_ID}/${slug}/${1}/${5}`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { articles = [] } = responseData;
    return {
      data: articles,
      success: true
    }
  } catch (e: any) {
      console.error(e);
  }
}
