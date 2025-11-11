# Storybook Interview Project

Welcome to the interview technical assessment! This document will guide you through the setup process and explain the two exercises you need to complete.

## Prerequisites & Setup

### 1. Install Node.js 22

First, you need to install Node.js version 22 on your system.

**Using NVM (Recommended):**

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node 22
nvm install 22

# Use Node 22
nvm use 22

# Verify installation
node --version  # Should output v22.x.x
```

**Alternative - Direct Installation:**
Download and install Node.js 22 from the official website: https://nodejs.org/

After installation, verify by running:

```bash
node --version
```

### 2. Install NPM Packages

Once Node.js 22 is installed, navigate to the project directory and install all dependencies:

```bash
npm install
```

This will install all required packages defined in `package.json`.

### 3. Run Storybook

To start the Storybook development server:

```bash
npm run storybook
```

Storybook will start and automatically open in your browser at `http://localhost:6006`. If it doesn't open automatically, you can navigate to this URL manually.

---

## CSS that can help

- **`_grid.scss`**: Our flex-based grid system
- **`_helpers.scss`**: Collection of basic classes for managing paddings, margins, text style modifiers, icons, etc.

You don't have to import any CSS , all CSS are imported automatically. This section is for your information so you can explore what classes are available.

---

## Interview Exercises

You are required to complete **two exercises**. Please read the requirements carefully and ensure your code follows best practices.

### Exercise 1: Responsive Login Page

**Objective:** Develop the markup for a responsive login page based on the provided design.

**Requirements:**

- Review the design file located in the `/designs` folder
- Create your implementation in the file: **`stories/pages/LoginPage.stories.tsx`**
- The page must be fully responsive (mobile, tablet, and desktop)
- Use the existing form components available in: **`app/modules/user/shared/components/form`**
- Ensure proper component composition and props usage
- Follow the design specifications precisely (spacing, colors, typography)

**Hints**

- Use the TextInput with the password attribute, also you can pass a classname and a link that will be displayed next the input box

````jsx
<TextInput
   label={t('fields.password.label')}
   name="password"
   type="password"
   link={{
         label: t('login.recover_password'),
         to: '/forgot-password',
   }}
/>
````
- Use the `Button` component
- Any images can be stored in `public/assets` and used like this:

 ````html
 <img src='/assets/myfile.jpg' />
 ````

**Available Form Components:**
Please refer to the components in `app/modules/user/shared/components/form` for form elements like inputs, buttons, labels, etc.

**Deliverables:**
- Completed `LoginPage.stories.tsx` file with proper Storybook stories
- Responsive implementation that matches the design
- Clean, well-structured code with appropriate prop types

---

### Exercise 2: Warning Component

**Objective:** Develop a reusable warning component based on the provided design.

**Requirements:**
- Review the design file located at: **`/design/warning.png`**
- Create your implementation in the file: **`stories/components/User/NewWarning.stories.tsx`**
- Add all necessary SASS styling in: **`app/scss/v2`**
- Place any required assets (icons, images) in: **`public/assets`**

**Implementation Details:**
1. **Component File:** `stories/components/User/NewWarning.stories.tsx`
   - Create the warning component with appropriate props
   - Include at least 2-3 story variations (different warning types, states)
   - Add proper TypeScript types

2. **Styles:** `app/scss/v2`
   - Create a new SASS file for the warning component
   - Follow the existing SASS structure and naming conventions
   - Ensure styles are modular and maintainable

3. **Assets:** `public/assets`
   - Add any icons or images needed for the warning component
   - Use appropriate file formats and optimize for web

**Deliverables:**
- Completed `NewWarning.stories.tsx` file with multiple story variations
- SASS files with proper styling
- Assets properly organized in the public folder

---

## Submission Guidelines

Once you've completed both exercises:

1. Ensure Storybook runs without errors: `npm run storybook`
2. Test your components in different screen sizes (responsive behavior)
3. Verify all assets load correctly
4. Submit your work on a branch named **`solution`**

## Evaluation Criteria

Your submission will be evaluated based on:

- **Code Quality:** Clean, readable, and well-organized code
- **Design Accuracy:** How closely your implementation matches the provided designs
- **Responsiveness:** Proper behavior across different screen sizes
- **Attention to Detail:** Proper spacing, typography, and visual polish
- **Git Usage:** Proper version control practices, commit history, and branch management

---

## Need Help?

If you encounter any issues during setup or have questions about the requirements, please don't hesitate to reach out.

Good luck with your assessment! 🚀
````
