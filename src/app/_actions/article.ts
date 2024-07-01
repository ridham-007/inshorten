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

export async function getDataBasedOnSlug(slug: string, page: number = 0, size: number = 0) {
  try {
    let url = "";
    if(page){
      url = `${process.env.NEXT_PUBLIC_API_URL}/common/${process.env.NEXT_PUBLIC_SITE_ID}/${slug}/${page}/${size}`
    }else{
      url = `${process.env.NEXT_PUBLIC_API_URL}/common/${process.env.NEXT_PUBLIC_SITE_ID}/${slug}`
    }
    const res = await fetch(url,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    return {
      data: responseData,
      success: true
    }
  } catch (e: any) {
      console.error(e);
  }
}

export async function getMetaDataBasedOnSlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/meta-data/${process.env.NEXT_PUBLIC_SITE_ID}/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    return {
      data: responseData?.data,
      success: true
    }
  } catch (e: any) {
      console.error(e);
  }
}