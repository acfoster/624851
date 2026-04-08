import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaults = {
  title: "624851 NB Inc. | Software Development and AI Tools",
  description:
    "624851 NB Inc. is a Moncton, New Brunswick software company building Ruby on Rails apps, internal tools, AI-assisted workflows, automations, and practical digital products.",
  image: "https://624851.com/og-image.svg",
  url: "https://624851.com",
};

const pageMeta = {
  "/": {
    title: "624851 NB Inc. | Software Development and AI Tools",
    description:
      "Moncton, New Brunswick software company building practical web applications, internal tools, client tools, and AI-assisted solutions.",
  },
  "/about": {
    title: "About | 624851 NB Inc.",
    description:
      "Learn about 624851 NB Inc., an independent Canadian software company focused on Ruby on Rails development, internal tools, and AI-enhanced workflows.",
  },
  "/projects": {
    title: "Projects | 624851 NB Inc.",
    description:
      "Explore products and software work from 624851 NB Inc., including DivvyTrackr, GoChorez, TradeCheckr, GetSteady.today, Local Flow, and automation tools.",
  },
  "/contact": {
    title: "Contact | 624851 NB Inc.",
    description:
      "Contact 624851 NB Inc. in Moncton, New Brunswick about software projects, small business tools, and AI-assisted solutions.",
  },
  "/privacy": {
    title: "Privacy Policy | 624851 NB Inc.",
    description:
      "Privacy policy for 624851 NB Inc. covering website inquiries, business communications, and product-related contact handling.",
  },
  "/terms": {
    title: "Terms | 624851 NB Inc.",
    description:
      "Terms for the 624851 NB Inc. website covering business information, acceptable use, and contact expectations.",
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
