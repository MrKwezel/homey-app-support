// Bookmarklet: turns the Homey Community Forum (Discourse) post you are
// reading into a pre-filled issue in MrKwezel/homey-app-support.
// Select the relevant text first (optional), then click the bookmark.
// The minified one-liner for the bookmark URL is in README.md.
(() => {
  const NEW_ISSUE = 'https://github.com/MrKwezel/homey-app-support/issues/new';
  const selection = window.getSelection();
  const text = String(selection || '').trim();

  // Link to the selected post when possible, otherwise to the current URL.
  let link = location.href;
  const topic = location.pathname.match(/^\/t\/[^/]+\/\d+/);
  const node = selection && selection.anchorNode;
  const element = node && (node.nodeType === 1 ? node : node.parentElement);
  const post = element && element.closest('[data-post-number]');
  if (topic && post) link = `${location.origin}${topic[0]}/${post.getAttribute('data-post-number')}`;

  const parts = document.title.split(' - ');
  const title = parts.length > 1 ? parts.slice(0, -1).join(' - ') : document.title;

  const query = new URLSearchParams({
    template: 'forum.yml',
    title,
    'forum-link': link,
    description: `${text ? `> ${text.slice(0, 4000).replace(/\n/g, '\n> ')}\n\n` : ''}Reported on the Homey Community Forum: ${link}`,
  });
  window.open(`${NEW_ISSUE}?${query}`, '_blank');
})();
