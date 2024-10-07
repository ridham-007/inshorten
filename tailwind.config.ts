import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        own_bg_secondary: "var(--secondary-bg-color)",
        own_text_primary: "var(--primary-text-color)",
        own_black_color_primary: "var(--primary-black-color)",
        own_bg_black_color_secondary: "var(--secondary-bg-black-color)",
        own_bg_header_top_secondary: "var(--secondary-bg-header-top)",
        own_bg_header_top_button_secondary:
          "var(--secondary-bg-header-top-button)",
        own_text_header_top_button_primary:
          "var(--primary-text-header-top-button)",
        own_bg_header_bottom_button_secondary:
          "var(--secondary-bg-header-bottom-button)",
        own_text_header_bottom_button_primary:
          "var(--primary-text-header-bottom-button)",
        own_text_header_bottom_button_mobile_primary:
          "var(--primary-text-header-bottom-button-mobile)",
        own_gray_text_color_primary: "var(--primary-gray-text-color)",
        own_block_text_color_primary: "var(--primary-block-text-color)",
        own_red_text_color_primary: "var(--primary-red-text-color)",
        own_white_text_color_primary: "var(--primary-white-text-color)",
        own_bg_contact_color_secondary: "var(--secondary-bg-contact-color)",
        own_text_contact_color_primary: "var(--primary-text-contact-color)",
        own_blue_color_primary: "var(--primary-blue-color)",
        own_text_gray_color_primary: "var(--primary-text-grey-color)",
        own_border_gray_color_primary: "var(--primary-border-gray-color)",
        own_text_grey_color_primary: "var(--primary-text-gray-color)",
        own_skeleton_color_primary: "var(--secondary-bg-skeleton-color)",
        own_white_color_primary: "var(--primary-text-white-color)",
        own_bg_footer_color: "var(--secondary-bg-footer-color)",
        own_bg_footer_secondary: "var(--secondary-bg-footer)",
        own_green_color_primary: "var(--primary-green-color)",
        own_blue_hover_primary: "var(--primary-blue-hover-color)",
        own_slider_color_primary: "var(--primary-slider-color)",
        own_instagram_from_primary: "var(--primary-instagram-from-color)",
        own_instagram_via_primary: "var(--primary-instagram-via-color)",
        own_instagram_to_primary: "var(--primary-instagram-to-color)",
        own_facebook_color_primary: "var(--primary-facebook-color)",
        own_twitter_color_primary: "var(--primary-twitter-color)",
        own_youtube_color_primary: "var(--primary-youtube-color)",
      },
    },
  },
  plugins: [],
};
export default config;
