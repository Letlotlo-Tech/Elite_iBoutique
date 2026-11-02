# Elite iPhone Boutique — Website Development PoE, Part 3

## Project pages
- `index.html` — Home
- `products.html` — Products
- `about_us.html` — About Us
- `services.html` — Services
- `enquiry.html` — Enquiry
- `contact.html` — Contact

## Technologies
HTML5, CSS3 (`css/style.css`) and JavaScript (`JS/main.js`). The website is a static front-end project.

## Design system
The refreshed palette combines warm cream and ivory backgrounds, sage-green actions, taupe and champagne-gold accents, and charcoal text. The layout adapts for smaller screens.

## Business contact details
- Email: tshabalalaletlotlo8@gmail.com
- Phone: 067 618 1497

## Part 3 functionality
- Shared JavaScript adds responsive mobile navigation, active-page indication, scroll-reveal animation and a dynamic footer year.
- Product enquiry links pass the selected product to the enquiry page, where matching product categories are preselected.
- Service cards have expand/collapse controls.
- The enquiry form uses client-side required-field, email and telephone validation. After validation it opens the visitor's email application with a prepared message addressed to the business. The visitor must press **Send**. This static website does not automatically transmit or store enquiries; that requires a server-side handler or a trusted form service.
- The Contact page embeds Google Maps for Johannesburg generally and includes a directions link. A precise shop address was not supplied, so no specific store address is claimed.

## Search engine optimisation
Each page has a page-specific title, meta description and keyword metadata. Informative product images have alternative text. Keep image alt text descriptive when adding or replacing images.

## Run locally
1. Extract the project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or open the HTML file directly in a browser.

## Testing checklist
- [ ] Open each of the six pages and test every navigation link.
- [ ] Test the mobile menu at a narrow screen width.
- [ ] Scroll through pages and confirm reveal effects do not hide content.
- [ ] Select each product enquiry button and confirm the correct category is preselected.
- [ ] Expand and collapse each service card.
- [ ] Submit the enquiry form empty, with an invalid email, with an invalid phone number, and with valid sample data. Confirm that valid data opens a prepared email and that the visitor can press Send.
- [ ] Confirm the Google Maps embed loads and the directions link opens Maps.
- [ ] Check the pages on at least two browsers or devices and inspect the browser console for errors.

## Git and GitHub workflow
The PoE brief specifies local Git development, regular pushes to the private GitHub repository, descriptive commit messages, and ongoing README updates. Accept the private-repository invitation supplied for the course before pushing. If the lecturer has already created a repository for you, clone that repository first and copy these project files into its working folder; do not create a separate public repository.

Suggested commit sequence (use each message when the corresponding work is actually committed):
```bash
git add .
git commit -m "Add responsive website pages and shared styling"
git add .
git commit -m "Implement JavaScript interactions and enquiry validation"
git add .
git commit -m "Improve page SEO and integrate Google Maps"
git add README.md
git commit -m "Document Part 3 changes and testing"
git push
```

If you are starting in an existing cloned course repository, run `git status` first and follow the repository's existing branch instructions. Do not run `git init` inside an already cloned repository.

## References (Harvard style)
- Google (n.d.) *Google Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).

## Changelog — Part 3
- Updated the design to a coordinated cream, ivory, sage, taupe and champagne palette.
- Rebuilt the homepage with responsive HTML.
- Standardised navigation links and shared JavaScript references across all six pages.
- Added mobile navigation, scroll-reveal effects, product-to-enquiry selection and service expand/collapse interactions.
- Added client-side enquiry form validation and a prepared email hand-off.
- Updated the supplied email address and telephone number.
- Added page-specific SEO titles, descriptions and keyword metadata.
- Integrated a Google Maps embed and directions link.
- Expanded project documentation and added a manual testing checklist.
