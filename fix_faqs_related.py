import re
import json

with open("src/app/(user)/blog/[slug]/page.tsx", "r") as f:
    content = f.read()

# Add FAQ import if not exists
if "import FAQ" not in content:
    content = content.replace('import { Share2 } from "lucide-react";', 'import { Share2 } from "lucide-react";\nimport FAQ from "@/modules/user/components/FAQ";')

# Data for related posts
blog_data = {
    "best-dress-material-guide-cotton-cloth": {
        "title": "How to Choose the Best Dress Material: A Complete Guide to Cotton Cloth for Comfort and Style",
        "image": "/best-dress-material-guide-cotton-cloth.webp"
    },
    "cotton-dresses-for-women": {
        "title": "Cotton Dresses for Women: The Perfect Blend of Comfort, Style, and Everyday Elegance",
        "image": "/cotton-dresses-for-women.webp"
    },
    "cotton-dress-material-guide": {
        "title": "Cotton Dress Material: The Ultimate Choice for Comfort, Style, and Everyday Wear",
        "image": "/cotton-dress-material-guide.webp"
    }
}

slugs = list(blog_data.keys())

# Let's manually replace the related arrays
# best-dress-material-guide-cotton-cloth
related_1 = f"""
        related: [
            {{
                title: "{blog_data['cotton-dresses-for-women']['title']}",
                slug: "cotton-dresses-for-women",
                image: "{blog_data['cotton-dresses-for-women']['image']}"
            }},
            {{
                title: "{blog_data['cotton-dress-material-guide']['title']}",
                slug: "cotton-dress-material-guide",
                image: "{blog_data['cotton-dress-material-guide']['image']}"
            }}
        ],
        faqs: [
            {{ q: "What is the best dress material for daily wear?", a: "Cotton cloth is considered one of the best dress materials for daily wear because it is breathable, comfortable, and easy to maintain." }},
            {{ q: "Why is cotton cloth so popular?", a: "Cotton offers softness, durability, comfort, and versatility, making it suitable for a wide range of clothing styles." }},
            {{ q: "How can I identify high-quality dress material?", a: "Check the texture, print quality, breathability, durability, and overall finishing before purchasing." }},
            {{ q: "Is batik print dress material suitable for everyday use?", a: "Yes. Batik print dress materials made from cotton are comfortable, stylish, and ideal for regular wear." }},
            {{ q: "Where can I buy premium cotton dress material?", a: "You can purchase premium cotton dress material from trusted manufacturers and suppliers that prioritize quality, craftsmanship, and customer satisfaction." }}
        ]
"""

# cotton-dresses-for-women
related_2 = f"""
        related: [
            {{
                title: "{blog_data['best-dress-material-guide-cotton-cloth']['title']}",
                slug: "best-dress-material-guide-cotton-cloth",
                image: "{blog_data['best-dress-material-guide-cotton-cloth']['image']}"
            }},
            {{
                title: "{blog_data['cotton-dress-material-guide']['title']}",
                slug: "cotton-dress-material-guide",
                image: "{blog_data['cotton-dress-material-guide']['image']}"
            }}
        ],
        faqs: [
            {{ q: "What makes cotton dresses comfortable for everyday wear?", a: "Cotton is naturally breathable, soft, and lightweight, making it ideal for extended daily use." }},
            {{ q: "Are cotton dresses suitable for all seasons?", a: "Yes. Cotton performs exceptionally well in summer and can easily be layered during cooler months." }},
            {{ q: "Why are cotton dresses becoming more popular?", a: "Consumers increasingly value comfort, sustainability, and versatile fashion, making cotton a preferred choice." }},
            {{ q: "How do I choose the right cotton dress?", a: "Consider your lifestyle, preferred fit, color choices, and the occasion for which you plan to wear the dress." }},
            {{ q: "Are batik cotton dresses suitable for modern fashion trends?", a: "Absolutely. Batik-inspired cotton dresses combine traditional artistry with contemporary style, making them both fashionable and timeless." }}
        ]
"""

# cotton-dress-material-guide
related_3 = f"""
        related: [
            {{
                title: "{blog_data['best-dress-material-guide-cotton-cloth']['title']}",
                slug: "best-dress-material-guide-cotton-cloth",
                image: "{blog_data['best-dress-material-guide-cotton-cloth']['image']}"
            }},
            {{
                title: "{blog_data['cotton-dresses-for-women']['title']}",
                slug: "cotton-dresses-for-women",
                image: "{blog_data['cotton-dresses-for-women']['image']}"
            }}
        ],
        faqs: [
            {{ q: "What is the best cotton dress material for everyday wear?", a: "Pure cotton dress material is widely preferred because it is breathable, comfortable, and easy to maintain." }},
            {{ q: "Why is cotton dress material popular among women?", a: "Cotton offers comfort, softness, durability, and versatility, making it suitable for daily and occasional wear." }},
            {{ q: "How can I identify quality cotton dress material?", a: "Check the texture, breathability, print quality, color consistency, and overall finishing of the fabric." }},
            {{ q: "Is cotton dress material suitable for all seasons?", a: "Yes. Cotton remains comfortable during summer and can easily be layered during cooler months." }},
            {{ q: "Why are batik print fabrics becoming more popular?", a: "Batik prints combine traditional craftsmanship with modern fashion trends, making them both stylish and timeless." }}
        ]
"""

# Now we need to remove the raw HTML FAQ section from the content strings.
# The FAQ section starts with `<div class="faq-section">` and ends before `\n        `,\n        image:`

content = re.sub(r'<div class="faq-section">.*?</div>\n\s*</div>\n\s*`', '`', content, flags=re.DOTALL)

# And replace the related block for the first post
content = re.sub(r'related: \[\n\s*\{\n\s*title: "Why Pure 60x60 Cotton is Best for Daily Wear",.*?\]', related_1.strip(), content, flags=re.DOTALL, count=1)

# And replace the related block for the second post
content = re.sub(r'related: \[\n\s*\{\n\s*title: "How to Choose the Best Dress Material: A Complete Guide to Cotton Cloth for Comfort and Style",\n\s*slug: "best-dress-material-guide-cotton-cloth",\n\s*image: "/best-dress-material-guide-cotton-cloth\.webp"\n\s*\}\n\s*\]', related_2.strip(), content, flags=re.DOTALL, count=1)

# And replace the related block for the third post
content = re.sub(r'related: \[\n\s*\{\n\s*title: "Cotton Dresses for Women: The Perfect Blend of Comfort, Style, and Everyday Elegance",\n\s*slug: "cotton-dresses-for-women",\n\s*image: "/cotton-dresses-for-women\.webp"\n\s*\}\n\s*\]', related_3.strip(), content, flags=re.DOTALL, count=1)

# Also we need to render the FAQ component after the blog content
# Let's insert `<FAQ items={post.faqs} />` right after the dangerouslySetInnerHTML div, before Related Posts
content = content.replace(
"""                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />""",
"""                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                    {post.faqs && <div className="mt-16"><FAQ items={post.faqs} /></div>}"""
)


with open("src/app/(user)/blog/[slug]/page.tsx", "w") as f:
    f.write(content)

print("Updates completed successfully")
