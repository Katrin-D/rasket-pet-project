import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { footerDetails, platformIcons } from "@/data/footer";
import Link from "next/link";
import { SocialName } from "@/types";

const Footer = () => {
  return (
    <footer className="bg-background-muted text-foreground py-10">
      <Container className="grid grid-cols-1 md:grid-cols-3 md:justify-items-center gap-10">
        <div>
          <Logo />
          <h3 className="mt-4 text-foreground-muted">
            Empowering businesses with cutting-edge financial technology
            solutions.
          </h3>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2 text-foreground-muted">
                <Link
                  href={link.url}
                  className="hover:text-secondary transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul>
            <li className="mb-2 text-foreground-muted">
              <a
                href={`mailto:${footerDetails.email}`}
                className="hover:text-secondary transition-colors"
              >
                Email: {footerDetails.email}
              </a>
            </li>
            <li className="mb-2 text-foreground-muted">
              <a
                href={`tel:${footerDetails.telephone}`}
                className="hover:text-secondary transition-colors"
              >
                Phone: {footerDetails.telephone}
              </a>
            </li>
            <li>
              <div className="mt-4 flex gap-5 items-center flex-wrap">
                {Object.entries(footerDetails.socials).map(([key, url]) => {
                  const socialPlatformName = key as SocialName;
                  const IconComponent = platformIcons[socialPlatformName];

                  if (IconComponent && url) {
                    return (
                      <Link
                        key={socialPlatformName}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent
                          size={24}
                          className="min-w-fit hover:text-secondary transition-colors"
                        />
                      </Link>
                    );
                  }
                })}
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:text-center col-span-full mt-8 text-foreground-muted">
          <p>Copyright © 2025 Rasket Rocket.</p>
          <p className="text-sm mt-1 text-gray-500">
            🇺🇦 Proudly made in Ukraine.
          </p>
          <p className="text-sm mt-1 text-gray-500">by Kate Lazarieva</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
