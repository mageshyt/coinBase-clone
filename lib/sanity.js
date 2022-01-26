import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "vjgvr3vu",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skIxlX48Qh3w1dcp3KUC5DRW8elvEUVwQk4ELf5otfK6Sw3d1p1N5lCZTCvxyTwmnA5pYKpY6CNGPVG2q72pzpmJHMFMFFTWEfmujyUT2Gbloxhvyz0J7zpTQUMX3iX7YzPCsLmSxgqqHABJ2NtXskedY3sszB6pB2sNc38BDY7oAecoK9kL", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
