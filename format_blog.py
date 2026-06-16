import re

with open("src/app/(user)/blog/[slug]/page.tsx", "r") as f:
    content = f.read()

# Strip className="..." from all p, h2, ul, div, table, thead, tbody, tr, th, td inside BLOG_POSTS
# Actually, just strip className="[^"]+" from everything inside the backticks, except we don't want to break Next.js code outside.
# Let's find the BLOG_POSTS object range
start_idx = content.find("const BLOG_POSTS")
end_idx = content.find("};", start_idx)

blog_posts_content = content[start_idx:end_idx]

# Remove classNames
cleaned_blog_posts = re.sub(r'\sclassName="[^"]+"', '', blog_posts_content)
# also remove class="..."
cleaned_blog_posts = re.sub(r"\sclass='[^']+'", '', cleaned_blog_posts)
cleaned_blog_posts = re.sub(r'\sclass="[^"]+"', '', cleaned_blog_posts)

# Insert it back
new_content = content[:start_idx] + cleaned_blog_posts + content[end_idx:]

# Now let's inject our custom CSS
css = """
                .blog-content { font-family: 'DM Sans', sans-serif; color: #3B1C14; line-height: 1.8; font-size: 1.125rem; }
                .blog-content p { margin-bottom: 1.75rem; opacity: 0.9; }
                .blog-content h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; margin-top: 3.5rem; margin-bottom: 1.5rem; color: #5A2A1F; line-height: 1.2; }
                .blog-content h3 { font-family: 'DM Sans', sans-serif; font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #8B3A2B; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content a { color: #8B3A2B; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
                .blog-content img { width: 100%; border-radius: 1.5rem; margin: 3rem 0; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .blog-content table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 2rem 0; font-size: 1rem; }
                .blog-content th { background-color: #F5F1EC; color: #8B3A2B; font-weight: 700; text-align: left; padding: 1rem 1.5rem; border-bottom: 2px solid rgba(90, 42, 31, 0.1); }
                .blog-content th:first-child { border-top-left-radius: 1rem; }
                .blog-content th:last-child { border-top-right-radius: 1rem; }
                .blog-content td { padding: 1rem 1.5rem; border-bottom: 1px solid rgba(90, 42, 31, 0.05); background-color: white; }
                .blog-content tr:last-child td:first-child { border-bottom-left-radius: 1rem; }
                .blog-content tr:last-child td:last-child { border-bottom-right-radius: 1rem; }
                .blog-content td:first-child { font-weight: 600; color: #5A2A1F; }
                .blog-content .faq-section { background-color: white; padding: 2.5rem; border-radius: 1.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); margin-top: 4rem; border: 1px solid rgba(90, 42, 31, 0.05); }
                .blog-content .faq-section h2 { margin-top: 0; text-align: center; }
"""

new_content = new_content.replace(".font-sans { font-family: 'Playfair Display', serif; }", ".font-sans { font-family: 'DM Sans', sans-serif; }\n" + css)

# Update the dangerouslySetInnerHTML wrapper class
new_content = new_content.replace('className="prose prose-xl prose-stone max-w-none text-[#5A2A1F]/80 font-medium"', 'className="blog-content"')

# Also let's format the FAQ block in the HTML to use the faq-section class
new_content = new_content.replace('<div>\n                        <h3>', '<div className="mb-6">\n                        <h3>')
new_content = new_content.replace('<div>\n                        <h3>What', '<div style="margin-bottom: 1.5rem;">\n                        <h3>What')

# I will just write a specific regex for the FAQ container
new_content = re.sub(r'<div>\s*<h2>Frequently Asked Questions</h2>', '<div class="faq-section">\n                <h2>Frequently Asked Questions</h2>', new_content)

with open("src/app/(user)/blog/[slug]/page.tsx", "w") as f:
    f.write(new_content)

print("Done")
