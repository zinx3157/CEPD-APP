# CEPD Madagascar — Church app

A mobile-friendly church app in French, Malagasy and English. The app can be installed on supported devices and caches its core files for offline use after the first successful visit.

## Publish with GitHub Pages

1. Create a public repository on GitHub (for example `cepd-app`).
2. Upload all the files in this folder to the **root** of the repository and commit them to the `main` branch.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/ (root)`, then save.
5. Wait for GitHub to publish the site. The address will appear in the Pages settings, generally `https://YOUR-USERNAME.github.io/cepd-app/`.
6. Open that address on a phone over Wi-Fi or mobile data. In a supported browser, use **Add to Home Screen** to install it.

Offline use needs a first online visit over HTTPS and a browser that supports service workers. External CEPD, Facebook and video links need an internet connection. Prayer intentions are stored only in the browser on that device; they are not sent to CEPD and will be lost if browser storage is cleared. Payment links lead to the official CEPD website; this app does not collect payments.

The CEPD logo and church details are sourced from https://cepd-madagascar.com/. Check service times and addresses with CEPD before publishing. The site's official media and external links may not be available in all three languages.

## Update the app

Edit the files in GitHub or upload replacements. When updating cached assets, increment the `CACHE` version in `service-worker.js` to help browsers receive the new version.
