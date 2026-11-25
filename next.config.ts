import type { NextConfig } from "next";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserOrOrganizationSite =
  repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;
const basePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repository &&
  !isUserOrOrganizationSite
    ? `/${repository}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
