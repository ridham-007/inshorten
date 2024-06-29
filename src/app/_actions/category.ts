"use server"
export async function getHeaderCategories() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/common/category/${process.env.NEXT_PUBLIC_SITE_ID}`,
        {
          next: { revalidate: 60 },
        }
      );
      const responseData = await res.json();
      const { categories = [] } = responseData;
      return {
        data: categories,
        success: true
      }
    } catch (e: any) {
      console.error(e);
    }
  }