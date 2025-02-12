import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
// Create a new Date object
const now = new Date();

// Get the current year
const currentYear = now.getFullYear();

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')      
    },
    {
      text: 'About',
      href: getPermalink('/about')      
    },  
    {
      text: 'Services',
      links: [
        {
          text: 'Shopify Solutions',
          href: getPermalink('/shopifyService'),
        },
        /*{
          text: 'Shopify App Development',
          href: getPermalink('/landing/sales'),
        },*/
        {
          text: 'SEO',
          href: getPermalink('/seo'),
        },
        {
          text: 'Social Media Marketing',
          href: getPermalink('/social-media-marketing'),
        }
      ],
    },
    {
      text: 'Our Products',
      links: [
        {
          text: 'WappCloud - WhatsApp Marketing Tool',
          href: 'https://www.wappcloud.com',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact')      
    },  
  ], 
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About US', href: getPermalink('/about') },
        { text: 'Shopify Solutions', href: getPermalink('/shopifyService') },
        { text: 'SEO', href: getPermalink('/seo') },
        { text: 'Social Media Marketing', href: getPermalink('/social-media-marketing') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Terms and Condtions', href:  getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/icon_pillar' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/iconpillar' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/IconpillarDigital/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/iconpillar-digital-solutions/' },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
  © ${currentYear} Icon Pillar - All rights reserved.
  `,
};
