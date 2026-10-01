# Naming decision

The fictional parent is **Vesper Media Group**. Its three independent products are **Watchlight** (operational coverage dashboard), **Frame** (interactive editorial data story), and **Verbatim** (mobile approved-wording library).

Version 2.0.0 of `@vesper/ui` supersedes `@meridian/ui` 1.0.0. This is a deliberate breaking rebrand: package and Vue/adapters use `Vesper`/`vesper`, styles use `vs-`, and the brand asset is an original V-and-star mark. Existing application repos adopted the Meridian 1.0 system and require explicit migration; the three prompts in `prompts/` are written for that state.

GitHub repositories use `andy-fitts-slalom/watchlight`, `andy-fitts-slalom/frame`, and `andy-fitts-slalom/verbatim`, each with `main` as the default branch. Vercel project names are Watchlight, Frame, and Verbatim. Watchlight is live at `watchlight-rouge.vercel.app`; the other production aliases still use their earlier slugs until routing is separately approved and verified.
