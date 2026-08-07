import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/robin-feldman-lcsw",
        destination: "/therapists/robin-feldman",
        permanent: true,
      },
      {
        source: "/kate-bowen-lcsw",
        destination: "/therapists/katherine-bowen",
        permanent: true,
      },
      {
        source: "/bobby-alexander-lmsw",
        destination: "/therapists/robert-alexander",
        permanent: true,
      },
      {
        source: "/internal-family-systems-ifs",
        destination: "/modalities/internal-family-systems",
        permanent: true,
      },
      {
        source: "/about-emdr-therapy",
        destination: "/modalities/emdr",
        permanent: true,
      },
      {
        source: "/ego-state-therapy",
        destination: "/modalities/ego-state-therapy",
        permanent: true,
      },
      {
        source: "/aedp",
        destination: "/modalities/aedp",
        permanent: true,
      },
      {
        source: "/blogpathtopeacepsychotherapy",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/menstherapygroup",
        destination: "/mens-therapy-group",
        permanent: true,
      },
      {
        source: "/contactus",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
