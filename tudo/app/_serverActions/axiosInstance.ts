'use server';

import { cookies } from "next/headers";
import { AxiosRequestConfig, AxiosError } from "axios";
import { api } from "./axios";

type ServerApiResponse<T> = T;

export async function serverApi<T = any>(
  config: AxiosRequestConfig
): Promise<ServerApiResponse<T>> {
  
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  try {
    const response = await api({
      ...config,
      headers: {
        ...config.headers,
        Authorization: accessToken
          ? `Bearer ${accessToken}`
          : undefined,
      },
    });

    return response.data as T;

  } catch (error) {
    const err = error as AxiosError<any>;

    // 🔁 Try Refresh If 401
    if (err.response?.status === 401 && refreshToken) {
      try {
        const refreshResponse = await api.post<{
          access: string;
        }>("/refresh/", {
          refresh: refreshToken,
        });

        const newAccessToken = refreshResponse.data.access;

        // 🍪 Update Cookie
        cookieStore.set("access_token", newAccessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });

        // 🔄 Retry original request
        const retryResponse = await api({
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        });

        return retryResponse.data as T;

      } catch {
        // ❌ Refresh Failed → Logout
        cookieStore.delete("access_token");
        cookieStore.delete("refresh_token");

        throw new Error("Session expired. Please login again.");
      }
    }

    // Other Errors
    throw new Error(
      err.response?.data?.detail ||
      err.message ||
      "Something went wrong"
    );
  }
}