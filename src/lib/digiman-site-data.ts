import { db } from "@/lib/db";
import {
  DEFAULT_FAQS,
  DEFAULT_OFFICES,
  DEFAULT_SERVICES,
  DEFAULT_SETTINGS,
  DEFAULT_TESTIMONIALS,
  type ServiceItem,
  type SiteData,
} from "@/lib/digiman-data";

export async function getSiteData(): Promise<SiteData> {
  try {
    const [serviceRows, testimonialRows, faqRows, officeRows] = await Promise.all([
      db.service.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.testimonial.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.faq.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.office.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
    ]);

    const services: ServiceItem[] = serviceRows.map((service) => {
      let items: string[] = [];
      try {
        items = JSON.parse(service.features);
      } catch {
        items = [];
      }
      return {
        slug: service.slug,
        title: service.title,
        desc: service.desc,
        price: service.price,
        items,
        icon: service.icon,
        category: service.category,
        featured: service.featured,
      };
    });

    return {
      settings: DEFAULT_SETTINGS,
      services: services.length > 0 ? services : DEFAULT_SERVICES,
      testimonials:
        testimonialRows.length > 0
          ? testimonialRows.map((testimonial) => ({
              name: testimonial.name,
              role: testimonial.role,
              text: testimonial.text,
              rating: testimonial.rating,
            }))
          : DEFAULT_TESTIMONIALS,
      faqs:
        faqRows.length > 0
          ? faqRows.map((faq) => ({ q: faq.question, a: faq.answer }))
          : DEFAULT_FAQS,
      offices:
        officeRows.length > 0
          ? officeRows.map((office) => ({
              type: office.type,
              label: office.label,
              address: office.address,
            }))
          : DEFAULT_OFFICES,
    };
  } catch (error) {
    console.error("getSiteData fallback ke data default:", error);
    return {
      settings: DEFAULT_SETTINGS,
      services: DEFAULT_SERVICES,
      testimonials: DEFAULT_TESTIMONIALS,
      faqs: DEFAULT_FAQS,
      offices: DEFAULT_OFFICES,
    };
  }
}
