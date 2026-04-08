import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaults = {
  title: "624851 NB Inc. | Software Development",
  description:
    "Small software shop based in Moncton, New Brunswick. Products and selected client work.",
  image: "https://624851.com/og-image.svg",
  url: "https://624851.com",
};

const pageMeta = {
  "/": {
    title: "624851 NB Inc. | Software Development",
    description:
      "Small software shop in Moncton, NB. We build our own products and take on selected client work.",
  },
  "/about": {
    title: "About | 624851 NB Inc.",
    description:
      "624851 NB Inc. is operated by Andrew Foster in Moncton, New Brunswick. Rails apps, native iOS development, and client work.",
  },
  "/projects": {
    title: "Projects | 624851 NB Inc.",
    description:
      "Software products and active builds from 624851 NB Inc., including GloveBoxGPS, GoChorez, TradeCheckr, GetSteady.today, and Local Flow.",
  },
  "/contact": {
    title: "Contact | 624851 NB Inc.",
    description:
      "Get in touch with 624851 NB Inc. about software projects and client work.",
  },
  "/privacy": {
    title: "Privacy Policy | 624851 NB Inc.",
    description:
      "Privacy policy for 624851 NB Inc. covering website inquiries, software products, and PIPEDA compliance.",
  },
  "/terms": {
    title: "Terms | 624851 NB Inc.",
    description:
      "Terms of use for the 624851 NB Inc. website.",
  },
};

function setMeta(name, content, attribute = "name") {
  if (!content) {
    return;
  }

  const selector = `meta[${attribute}="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function Meta() {
  const location = useLocation();
  const current = pageMeta[location.pathname] ?? {};
  const title = current.title ?? defaults.title;
  const description = current.description ?? defaults.description;
  const url = location.pathname === "/" ? defaults.url : `${defaults.url}${location.pathname}`;

  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", defaults.image, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", defaults.image);
    setCanonical(url);
  }, [description, title, url]);

  return null;
}

export default Meta;
