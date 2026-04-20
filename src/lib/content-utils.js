export const POSTS_PER_PAGE = 10;

export function sortPostsByDate(posts) {
  return [...posts].sort((a, b) => {
    const aDate = new Date(a.frontmatter?.date ?? 0).getTime();
    const bDate = new Date(b.frontmatter?.date ?? 0).getTime();
    return bDate - aDate;
  });
}

export function getUniqueCategories(posts) {
  const set = new Set();
  for (const post of posts) {
    const categories = Array.isArray(post.frontmatter?.categories) ? post.frontmatter.categories : [];
    for (const category of categories) {
      set.add(category);
    }
  }
  return Array.from(set).sort();
}

export function paginatePosts(posts, page, perPage = POSTS_PER_PAGE) {
  const currentPage = Number(page) || 1;
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * perPage;
  const pagedPosts = posts.slice(start, start + perPage);
  return { currentPage: safePage, totalPages, pagedPosts };
}

export function getPostSchema(post, canonical) {
  const fm = post?.frontmatter ?? {};
  if (fm.type === 'job') {
    return {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: fm.title,
      datePosted: fm.date,
      validThrough: fm.deadline ?? fm.date,
      description: fm.description,
      hiringOrganization: {
        '@type': 'Organization',
        name: fm.organization ?? 'NoticePointBD',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BD',
        },
      },
      url: canonical,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fm.title,
    datePublished: fm.date,
    dateModified: fm.date,
    description: fm.description,
    image: fm.image,
    author: {
      '@type': 'Organization',
      name: 'NoticePointBD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NoticePointBD',
    },
    mainEntityOfPage: canonical,
  };
}
