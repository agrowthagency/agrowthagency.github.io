# Performance audit — 2026-07-22

Tested with Lighthouse 13.4.1, the lab engine used by PageSpeed Insights. Scores can vary slightly between runs and locations.

## Production before asset optimization

URL: `https://agrowthagency.github.io/`

| Profile | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS | Transfer |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 89 | 100 | 100 | 100 | 1.1 s | 3.7 s | 0 ms | 0 | 507 KiB |
| Desktop | 99 | 100 | 100 | 100 | 0.4 s | 0.8 s | 0 ms | 0 | 507 KiB |

The 493 KiB PNG logo was the main mobile LCP and transfer-cost bottleneck.

## Optimized production build

Measured from the local static production preview after replacing presentation uses of the logo with 640 px and 96 px WebP variants, adding a 48 px favicon, and reserving image dimensions.

| Profile | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS | Transfer |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 100 | 100 | 100 | 100 | 0.8 s | 1.1 s | 0 ms | 0 | 41 KiB |
| Desktop | 100 | 100 | 100 | 100 | 0.2 s | 0.3 s | 0 ms | 0 | 41 KiB |

The optimized hero mark is 22 KiB, the header/footer mark is 3 KiB, and the favicon is 595 bytes.

## Field data status

The public PageSpeed Insights API returned HTTP 429 during this audit, so the 28-day CrUX field dataset could not be verified. After deployment, rerun the public PageSpeed Insights report for both mobile and desktop. Field data may also be unavailable when an origin does not have enough eligible Chrome traffic.

PageSpeed Insights: <https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fagrowthagency.github.io%2F>

Methodology: <https://developers.google.com/speed/docs/insights/v5/about>
