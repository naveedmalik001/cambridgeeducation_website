import sys
import os

pdf_path = r"c:\xampp\htdocs\cambridge_website\cambridge_bronchure\Cambridge Education Consultants (Broucher).pdf"

# Try pypdf or PyPDF2
try:
    import pypdf
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages[:10]: # Read first 10 pages for overview
        text += page.extract_text() or ""
    print("Extracted from first 10 pages:")
    print(text[:1000])
except Exception as e:
    print("pypdf error:", e)
    try:
        import PyPDF2
        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for page in reader.pages[:10]:
            text += page.extract_text() or ""
        print("Extracted from first 10 pages (PyPDF2):")
        print(text[:1000])
    except Exception as e2:
        print("PyPDF2 error:", e2)
