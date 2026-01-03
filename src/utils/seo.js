import { SITE } from "../content/site.js";

export function setMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl
}) {
  const finalTitle = title ? `${title} — ${SITE.name}` : SITE.seo.defaultTitle;
  const finalDesc = description || SITE.seo.defaultDescription;

  document.title = finalTitle;

  upsertMeta("name", "description", finalDesc);
  upsertMeta("property", "og:title", ogTitle || finalTitle);
  upsertMeta("property", "og:description", ogDescription || finalDesc);
  upsertMeta("property", "og:image", ogImage || SITE.seo.ogImage);
  upsertMeta("property", "og:url", ogUrl || window.location.href);
}

function upsertMeta(attrKey, attrValue, content) {
  let tag = document.querySelector(`meta[${attrKey}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrKey, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}