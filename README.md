# Homey app support

Support for the Homey apps by MrKwezel. / Support voor de Homey-apps van MrKwezel.

| App | Homey App Store |
|---|---|
| Connector for YNAB | *coming soon* |

## Report a problem or idea / Een probleem of idee melden

1. Go to [Issues → New issue](../../issues/new/choose). / Ga naar [Issues → New issue](../../issues/new/choose).
2. Choose **Bug report** or **Feature request** and pick the app. / Kies **Bug report** of **Feature request** en kies de app.
3. **Never paste tokens, passwords or other secrets.** / **Plak nooit tokens, wachtwoorden of andere geheimen.**

For general questions, the [Homey Community Forum](https://community.homey.app) is often the quickest. / Voor algemene vragen is het [Homey Community Forum](https://community.homey.app) vaak het snelst.

---

## For the maintainer / Voor de beheerder

### From forum post to issue (bookmarklet)

1. Create a new bookmark in your browser. Name it **→ GitHub issue**.
2. Paste the contents of [`tools/bookmarklet.txt`](tools/bookmarklet.txt) as the URL. It starts with `javascript:`.
3. On the forum: select the relevant text (optional) and click the bookmark.
4. A pre-filled issue opens with the forum title, a link to that exact post and the selected text. Adjust the title, choose the type and click **Submit**.
5. Reply on the forum, for example with a macOS text replacement (`;bl` → "Thanks! I've put it on the backlog, you can follow it here: ") followed by the issue link.

Readable source: [`tools/forum-to-issue.js`](tools/forum-to-issue.js).

### Labels

[`.github/workflows/label-issues.yml`](.github/workflows/label-issues.yml) labels new issues automatically, creating missing labels:
- `app:<app-name>`, from the **App** dropdown;
- `forum`, plus `bug`, `enhancement` or `question`, for issues from the forum.

### Adding a new app

1. Add the app name to the **App** dropdown in all three forms in [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/).
2. Add a row to the table at the top of this README.
3. In the app's `.homeycompose/app.json`, set `"support"` to `https://github.com/MrKwezel/homey-app-support/issues` and `"bugs": { "url": "https://github.com/MrKwezel/homey-app-support/issues" }`.

### Linking to the private code repositories

- Create a follow-up issue in the private app repository with the link to the public issue. Visitors cannot see private issues or code.
- A commit or pull request in the private repository with `Fixes MrKwezel/homey-app-support#<number>` should close the public issue once it lands on `main` (check this once: cross-repository closing from a private repository can behave differently).
- A GitHub Project on your account can show issues from public and private repositories on one board.
