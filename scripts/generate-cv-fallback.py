"""Regenerate the embedded CV fallback used for local file:// downloads.

Run from anywhere:
    python scripts/generate-cv-fallback.py

The generated file is loaded only when a visitor clicks a CV download button
while the site is opened directly from disk. Hosted sites use the normal PDF.
"""

from base64 import b64encode
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = ROOT / "assets" / "cv" / "Abdel_Djalil_Aberkane_CV_FR.pdf"
OUTPUT_PATH = ROOT / "assets" / "cv" / "cv-pdf-base64.js"


def main() -> None:
    if not PDF_PATH.exists():
        raise SystemExit(f"CV not found: {PDF_PATH}")

    encoded = b64encode(PDF_PATH.read_bytes()).decode("ascii")
    header = (
        "/* Auto-generated file: do not edit by hand.\n"
        "   Regenerate with: python scripts/generate-cv-fallback.py\n"
        "   Source: assets/cv/Abdel_Djalil_Aberkane_CV_FR.pdf */\n"
    )
    OUTPUT_PATH.write_text(
        header + 'window.PORTFOLIO_CV_BASE64 = "' + encoded + '";\n',
        encoding="ascii",
    )
    print(f"Wrote {OUTPUT_PATH} ({OUTPUT_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
