/**
 * 生成带 base 前缀的内部路径。
 * astro.config.mjs 中 base: '/portfolio' 时，BASE_URL 可能是 '/portfolio' 或 '/portfolio/'，
 * 必须规范后再拼接，否则会出现 /portfolioprojects 这类错误路径。
 */
function baseUrl(): string {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export function path(route: string = ""): string {
  const base = baseUrl();
  if (!route) return base === "/" ? "/" : base.replace(/\/$/, "") || "/";

  const normalized = route.replace(/^\//, "");
  return `${base}${normalized}`;
}

/** 判断是否为外部链接 */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

/** 内部路径加 base，外部链接原样返回 */
export function resolveUrl(url: string): string {
  if (!url || url === "#") return url;
  return isExternalUrl(url) ? url : path(url);
}
