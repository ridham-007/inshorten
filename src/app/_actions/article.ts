"use server"

import { prepareServerError } from "@/lib/helpers";

export async function getRecentNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article/${process.env.NEXT_PUBLIC_SITE_ID}/recent`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { data } = responseData;
    return {
      data: data,
      success: true,
    };
  } catch (e: any) {
    // return prepareServerError(e?.message);
  }
}
