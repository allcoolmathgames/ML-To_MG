import os
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def ml_to_mg():
    return render_template('ml-to-mg/ml-to-mg.html')

@app.route('/mg-to-ml')
def mg_to_ml():
    return render_template('mg-to-ml/mg-to-ml.html')

@app.route('/g-to-l')
def g_to_l():
    return render_template('g-to-l/g-to-l.html')

@app.route('/kg-to-l')
def kg_to_l():
    return render_template('kg-to-l/kg-to-l.html')

@app.route('/l-to-g')
def l_to_g():
    return render_template('l-to-g/l-to-g.html')

@app.route('/l-to-kg')
def l_to_kg():
    return render_template('l-to-kg/l-to-kg.html')

@app.route('/ml-to-g')
def ml_to_g():
    return render_template('ml-to-g/ml-to-g.html')

@app.route('/ml-to-oz')
def ml_to_oz():
    return render_template('ml-to-oz/ml-to-oz.html')

@app.route('/oz-to-ml')
def oz_to_ml():
    return render_template('oz-to-ml/oz-to-ml.html')

@app.route('/g-to-ml')
def g_to_ml():
    return render_template('g-to-ml/g-to-ml.html')

@app.route('/about-us')
def about_us():
    return render_template('pages/about-us.html')

@app.route('/contact')
def contact():
    return render_template('pages/contact.html')

@app.route('/privacy-policy')
def privacy_policy():
    return render_template('pages/privacy-policy.html')

@app.route('/terms-conditions')
def terms_conditions():
    return render_template('pages/terms-conditions.html')

@app.route('/blogs')
def blog_index():
    return render_template('blogs/blog_index.html')

@app.route('/blogs/what-is-ml-to-mg')
def what_is_ml_to_mg():
    return render_template('blogs/what-is-ml-to-mg.html')

@app.route('/blogs/how-to-convert-ml-to-mg')
def how_to_convert_ml_to_mg():
    return render_template('blogs/how-to-convert-ml-to-mg.html')

@app.route('/blogs/density-guide')
def density_guide():
    return render_template('blogs/density-guide.html')

if __name__ == '__main__':
    # Check if a PORT environment variable is set (e.g., on Railway)
    port = os.environ.get("PORT")
    if port:
        # Run on the port provided by the environment
        app.run(host="0.0.0.0", port=int(port), debug=False)
    else:
        # Run locally on port 5000
        app.run(host="127.0.0.1", port=5000, debug=True)