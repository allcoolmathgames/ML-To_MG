import os
from flask import Flask, render_template, request, url_for, redirect, Blueprint, session, send_from_directory

app = Flask(__name__, template_folder='templates', static_folder='static')
app.secret_key = 'your_secret_key_here'

# Supported languages (English is default and handled separately)
SUPPORTED_LANGS = ['ar', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'tr']

# List of pages that are not localized and should redirect to English
UNTRANSLATED_PAGES = [
    'blogs', 
    'how-to-convert-ml-to-mg', 
    'what-is-ml-to-mg', 
    'density-guide',
    'contact', 
    'about-us', 
    'privacy-policy', 
    'terms-conditions'
]

# --- Helper: Get correct template name ---
def get_template_name(base_path, lang_code):
    """Return correct template path based on lang code."""
    if lang_code == 'en':
        return f'{base_path}.html'
    return f'{base_path}_{lang_code}.html'

# --- Blueprints ---
lang_routes = Blueprint('lang_routes', __name__, url_prefix='/<lang_code>')

# --- Trailing Slash Handling ---
@app.before_request
def handle_trailing_slash():
    if request.path != '/' and request.path.endswith('/'):
        return redirect(request.path[:-1], code=301)

# --- ENGLISH ROUTES ---
# Default English Home Page
@app.route('/', strict_slashes=False)
def home():
    session['lang_code'] = 'en'
    return render_page('en', 'home')

# --- LOCALIZED HOME ROUTES ---
# Localized Home Pages (e.g., /fr, /ar)
@app.route('/<lang_code>', strict_slashes=False)
def localized_home(lang_code):
    if lang_code not in SUPPORTED_LANGS:
        return default_pages(lang_code)
    
    session['lang_code'] = lang_code
    return render_page(lang_code, 'home')

# --- ALL OTHER ENGLISH PAGES ---
# All other English pages (e.g., /contact, /g-to-l, /blogs)
@app.route('/<page>', strict_slashes=False)
def default_pages(page):
    session['lang_code'] = 'en'
    
    if page == 'blogs':
        return render_template(get_template_name('blogs/blog_index', 'en'), lang_code='en', current_page_name='blogs')
    
    blog_slugs = {
        'how-to-convert-ml-to-mg': 'blogs/how-to-convert-ml-to-mg',
        'what-is-ml-to-mg': 'blogs/what-is-ml-to-mg',
        'density-guide': 'blogs/density-guide'
    }
    
    base_path = blog_slugs.get(page)
    if base_path:
        return render_template(get_template_name(base_path, 'en'), lang_code='en', current_page_name=page)

    return render_page('en', page)

# --- ALL OTHER LOCALIZED PAGES (Including Blogs) ---
# All other localized pages and blogs (e.g., /fr/contact, /ar/g-to-l, /ar/blogs)
@lang_routes.route('/<page>', strict_slashes=False)
def localized_pages(lang_code, page):
    if lang_code not in SUPPORTED_LANGS:
        return redirect(url_for('home'))
    
    # If the page is not translated, redirect to the English version
    if page in UNTRANSLATED_PAGES:
        return redirect(url_for('default_pages', page=page), code=302)

    session['lang_code'] = lang_code
    
    blog_slugs = {
        'how-to-convert-ml-to-mg': 'blogs/how-to-convert-ml-to-mg',
        'what-is-ml-to-mg': 'blogs/what-is-ml-to-mg',
        'density-guide': 'blogs/density-guide'
    }
    
    if page == 'blogs':
        return render_template(get_template_name('blogs/blog_index', lang_code), lang_code=lang_code, current_page_name='blogs')
    elif page in blog_slugs:
        base_path = blog_slugs.get(page)
        return render_template(get_template_name(base_path, lang_code), lang_code=lang_code, current_page_name=page)
    else:
        return render_page(lang_code, page)

# --- Common Render Function ---
def render_page(lang_code, page):
    """
    Renders the correct template based on language and page name.
    """
    page_map = {
        'home': 'ml-to-mg/ml-to-mg',
        'about-us': 'pages/about-us',
        'contact': 'pages/contact',
        'privacy-policy': 'pages/privacy-policy',
        'terms-conditions': 'pages/terms-conditions',
        
        # --- TOOL PAGES ---
        'ml-to-mg': 'ml-to-mg/ml-to-mg',
        'mg-to-ml': 'mg-to-ml/mg-to-ml',
        'ml-to-g': 'ml-to-g/ml-to-g',
        'g-to-ml': 'g-to-ml/g-to-ml',
        'g-to-l': 'g-to-l/g-to-l',
        'kg-to-l': 'kg-to-l/kg-to-l',
        'l-to-g': 'l-to-g/l-to-g',
        'l-to-kg': 'l-to-kg/l-to-kg',
        'ml-to-oz': 'ml-to-oz/ml-to-oz',
        'oz-to-ml': 'oz-to-ml/oz-to-ml',
        'mg-to-tsp': 'mg-to-tsp/mg-to-tsp',
        'tsp-to-mg': 'tsp-to-mg/tsp-to-mg',
        'cc-to-hp': 'cc-to-hp/cc-to-hp',
        'ml-to-moles': 'ml-to-moles/ml-to-moles',
        'gram-to-moles': 'gram-to-moles/gram-to-moles',
    }
    
    base_path = page_map.get(page)
    if not base_path:
        return "Page Not Found", 404
        
    try:
        template_name = get_template_name(base_path, lang_code)
        return render_template(template_name, lang_code=lang_code, current_page_name=page)
    except Exception as e:
        return f"<h1>Error: Template not found for '{lang_code}' page '{page}'</h1><p>Please check if the file '{template_name}' exists.</p><p>Original error: {e}</p>", 404

# --- Sitemap Route ---
@app.route('/sitemap.xml', strict_slashes=False)
def sitemap():
    return send_from_directory(app.root_path, 'sitemap.xml')

# --- Register Blueprints ---
app.register_blueprint(lang_routes)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)