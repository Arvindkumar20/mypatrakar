import { Globe, Headphones, Mail, Phone } from "lucide-react";
import React from "react";
import { FaWebAwesome } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 mt-28 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-red-500 pl-4 mb-6">
            About My Patrakar<sup>®</sup> - V1
          </h1>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Welcome to <strong>My Patrakar<sup>®</sup> - V1</strong>, a complete digital news publishing and media management platform designed for modern journalists, media agencies, reporters, bloggers, and digital news startups.
            </p>

            <p>
              My Patrakar<sup>®</sup> helps individuals and organizations create their own professional News App, News Website, and Digital News Portal quickly, efficiently, and without any technical knowledge.
            </p>

            <p>
              Whether you are an independent journalist, a local reporter, a regional media house, or a growing digital news agency, our platform provides everything needed to establish and manage your digital media presence professionally.
            </p>

            <p>Our goal is to simplify digital journalism and make media technology accessible to everyone.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">What is My Patrakar<sup>®</sup>?</h2>
            <p>
              My Patrakar<sup>®</sup> is an all-in-one platform that allows users to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Launch their own branded news mobile application</li>
              <li>Create a responsive and professional news website</li>
              <li>Publish and manage news content easily</li>
              <li>Send breaking news notifications instantly</li>
              <li>Build a digital media brand without coding</li>
            </ul>
            <p>
              The platform is specially designed for the growing digital journalism ecosystem and helps users move from traditional reporting to a fully digital media setup.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Start Demo & Trial</h2>
            <p>
              Before launching your own platform, My Patrakar<sup>®</sup> allows you to explore a live demo and trial experience.
            </p>
            <p>With the demo version, users can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Understand how the news app works</li>
              <li>Experience website functionality</li>
              <li>Test publishing features</li>
              <li>Explore the admin workflow</li>
              <li>See the design and user experience before deployment</li>
            </ul>
            <p>This helps clients make informed decisions before going live with their own digital news platform.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-red-600">Dynamic News Publishing</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Create, edit, and publish news articles instantly</li>
                  <li>Manage categories, tags, and breaking news</li>
                  <li>SEO-friendly publishing structure</li>
                  <li>Fast content updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-600">Professional News App & Website</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Modern and responsive UI design</li>
                  <li>Optimized for mobile and web devices</li>
                  <li>Smooth and fast user experience</li>
                  <li>Clean news reading interface</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-600">Multimedia Support</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Upload images and videos easily</li>
                  <li>Media-rich news articles</li>
                  <li>Gallery and visual content support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-600">Smart Notification System</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Send breaking news alerts instantly</li>
                  <li>Push notifications for important updates</li>
                  <li>Audience engagement tools</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-600">Voice & Smart Features</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Voice input support</li>
                  <li>Smart search functionality</li>
                  <li>Easy content accessibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-600">Secure & Reliable Infrastructure</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Secure server architecture</li>
                  <li>Firewall-protected systems</li>
                  <li>Stable performance and uptime</li>
                  <li>Reliable content delivery</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Who Can Use My Patrakar<sup>®</sup>?</h2>
            <div className="flex flex-wrap gap-2">
              {["Journalists", "Local Reporters", "News Agencies", "Media Startups", "Bloggers", "Content Creators", "Digital Publishers", "Regional News Channels", "Online Media Organizations"].map((item) => (
                <span key={item} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Why Choose My Patrakar<sup>®</sup>?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Fast Setup</strong> – Launch your own digital news platform within 48 hours using our streamlined deployment process.</li>
              <li><strong>No Technical Skills Required</strong> – The platform is designed for non-technical users and provides an easy-to-manage system.</li>
              <li><strong>Affordable & Scalable</strong> – Suitable for both small media startups and growing news organizations.</li>
              <li><strong>Complete Digital Media Solution</strong> – Get both a professional news app and website in one integrated platform.</li>
              <li><strong>User-Friendly Management</strong> – Manage articles, media, notifications, and categories from a simple admin system.</li>
              <li><strong>Designed for Modern Journalism</strong> – Built specifically for digital reporters and modern media workflows.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Vision</h2>
            <p>
              Our vision is to empower journalists and independent media organizations with affordable and powerful digital technology solutions.
            </p>
            <p>
              We believe every journalist should have the ability to build and manage their own digital media platform independently without depending on expensive development teams or complicated software systems.
            </p>
            <p>
              My Patrakar<sup>®</sup> aims to support the future of regional, independent, and digital journalism through smart and scalable technology.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Permissions Used</h2>
            <p>The application may request certain permissions for functionality purposes, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Microphone Access</strong> – for voice input features</li>
              <li><strong>Internet Access</strong> – for loading and syncing content</li>
              <li><strong>Notifications</strong> – for breaking news alerts and updates</li>
              <li><strong>Phone Access</strong> – for direct calling features</li>
            </ul>
            <p>These permissions are used only to support application functionality and improve user experience.</p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
              <p className="mt-2 flex items-center gap-2">
    <Globe size={16} className="text-red-600" />
    Website:
    <a
      href="https://mypatrakar.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 hover:underline"
    >
      mypatrakar.com
    </a>
  </p>

  <p className="flex items-center gap-2">
    <Mail size={16} className="text-red-600" />
    Email: info@mypatrakar.com
  </p>

  <p className="flex items-center gap-2">
    <Phone size={16} className="text-red-600" />
    Phone: +91 9005622459
  </p>

  <p className="flex items-center gap-2">
    <Headphones size={16} className="text-red-600" />
    Support: +91 8176091467
  </p>
              <p className="text-sm text-gray-500 mt-4">© My Patrakar<sup>®</sup> - All Rights Reserved.</p>
              <p className="text-xs text-gray-400">Updated At: 19 May, 2026 05:34</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;