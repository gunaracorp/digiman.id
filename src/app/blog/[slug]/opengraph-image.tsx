import { OgCard, renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getPost } from "@/lib/blog-posts";

/** OG image OTOMATIS per artikel blog — dirender dari judul & kutipan artikel. */
export const alt = "Artikel Blog DIGIMAN.ID";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  let card = (
    <OgCard
      kicker="Blog"
      chip="Artikel"
      title="Panduan Legalitas Bisnis — Blog DIGIMAN.ID"
      footerLeft="Artikel baru setiap minggu"
    />
  );

  if (post) {
    const dateLabel = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(post.date));

    card = (
      <OgCard
        kicker={`Blog · ${dateLabel}`}
        chip={`${post.readMinutes} menit baca`}
        title={post.title}
        sub={post.excerpt}
        titleMax={85}
        footerLeft="digiman.id/blog"
      />
    );
  }

  return renderOg(card);
}
