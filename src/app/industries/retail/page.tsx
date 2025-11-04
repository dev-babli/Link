"use client";

import { EnhancedEnhancedIndustryPageTemplate } from "@/components/EnhancedEnhancedIndustryPageTemplate";

export default function RetailPage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Retail & E-commerce"
      subtitle="Omnichannel Retail Solutions"
      description="Create seamless shopping experiences across all channels. We build scalable e-commerce platforms, omnichannel solutions, and retail technology that drives sales, enhances customer engagement, and optimizes operations."
      heroImage="/images/industry_cards/Retail and Ecommerce.webp"
      keyStats={[
        { value: "60+", label: "Retail Projects" },
        { value: "150%", label: "Average Revenue Growth" },
        { value: "10M+", label: "Products Managed" },
        { value: "30+", label: "Retail Clients" },
      ]}
      challenges={[
        "Creating seamless omnichannel shopping experiences",
        "Managing inventory across multiple channels",
        "Optimizing conversion rates and reducing cart abandonment",
        "Personalizing customer experiences at scale",
        "Integrating with payment and shipping providers",
        "Handling peak traffic and seasonal demand",
        "Managing product catalogs and content",
        "Analyzing customer behavior and sales data",
      ]}
      solutions={[
        {
          title: "E-commerce Platforms",
          description: "Scalable online storefronts with product catalogs, shopping carts, checkout flows, payment processing, and order management systems."
        },
        {
          title: "Omnichannel Commerce",
          description: "Unified commerce platforms that integrate online, mobile, and in-store experiences with shared inventory, customer data, and order management."
        },
        {
          title: "Product Information Management (PIM)",
          description: "Centralized systems for managing product data, images, descriptions, pricing, and inventory across all channels and marketplaces."
        },
        {
          title: "Customer Personalization",
          description: "AI-powered personalization engines that deliver customized product recommendations, content, and shopping experiences based on customer behavior."
        },
        {
          title: "Order Management Systems (OMS)",
          description: "Comprehensive order processing platforms that handle order routing, inventory allocation, fulfillment, and shipping across multiple warehouses and channels."
        },
        {
          title: "Retail Analytics",
          description: "Advanced analytics platforms that provide insights into sales performance, customer behavior, inventory optimization, and marketing effectiveness."
        },
      ]}
      caseStudies={[
        {
          title: "Fashion Retailer - E-commerce Platform",
          description: "Built a high-performance e-commerce platform with advanced product filtering, personalized recommendations, and seamless checkout for a fashion retailer with 50,000+ SKUs.",
          result: "Increased online sales by 180%, improved conversion rate by 45%, and reduced cart abandonment by 38%"
        },
        {
          title: "Grocery Chain - Omnichannel Solution",
          description: "Developed an integrated omnichannel platform connecting online ordering, mobile app, and in-store pickup/delivery with real-time inventory synchronization.",
          result: "Grew online orders by 250%, improved customer retention by 55%, and increased average order value by 28%"
        },
        {
          title: "Marketplace Platform - Multi-Vendor System",
          description: "Created a B2B marketplace platform enabling thousands of vendors to sell products with automated inventory sync, payment processing, and order fulfillment.",
          result: "Onboarded 5,000+ vendors, processed $100M+ in GMV, and achieved 99.9% platform uptime"
        },
      ]}
      expertise={[
        "E-commerce Platforms",
        "Shopping Cart Systems",
        "Payment Gateways",
        "Inventory Management",
        "Order Management",
        "Product Catalogs",
        "Marketplace Platforms",
        "Personalization Engines",
        "Retail Analytics",
        "Mobile Commerce",
        "Headless Commerce",
        "Subscription Commerce",
      ]}
    />
  );
}
